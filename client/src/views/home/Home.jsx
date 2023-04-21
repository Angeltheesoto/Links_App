import React, { useContext, useState } from "react";
import "./home.css";
import { AuthContext } from "../../context/AuthContext";
import Links from "../../components/links/Links";
import axios from "axios";

const Home = ({ postsData }) => {
  // Will need this to make requests to preform CRUD operations on data.
  const { user } = useContext(AuthContext);
  let username = localStorage.getItem("username");
  // This is removing the quotes around the value in localstorage.
  if (username != null) {
    username = username.replace(/^"(.*)"$/, "$1");
  }

  const filterPosts = postsData.filter(
    (post) => post.author_username === username
  );

  // CRUD OPERATIONS
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isAdd, setIsAdd] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    brand: "other",
    url: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const config = {
    headers: {
      Authorization: "Token " + user.token,
      "Content-Type": "application/json",
    },
  };
  // ADD
  const handleAdd = (e) => {
    setIsAdd(!isAdd);
  };
  const handleConfirmAdd = (e) => {
    e.preventDefault();
    setIsAdd(!isAdd);
    axios
      .post(`http://localhost:8000/api-posts/`, formData, config)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // EDIT
  const handleEdit = (id) => {
    setIsEdit(!isEdit);
    setEditId(id);
  };
  const handleConfirmEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    setEditId(null);
    axios
      .put(`http://localhost:8000/api-posts/${editId}/`, formData, config)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // DELETE
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api-posts/${id}/`, config)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="HomeContainer">
      <div className="homeProfileContainer">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          className="homeProfileImage"
        />
        <h2 className="homeProfileUsername">{username}</h2>
      </div>

      {/* CREATE */}
      <div className="homeBtnContainer">
        <button
          type="submit"
          onClick={handleAdd}
          className={!isAdd ? "editHide" : "linksButton edit"}
        >
          Add Link
        </button>
      </div>
      {isAdd ? null : (
        <div className="editContainer">
          <form onSubmit={handleConfirmAdd} className="homeForm">
            <div className="registerFormContainer">
              <h1 className="registerHeading">Add Link</h1>
              <div className="labelContainer">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="floatingInput"
                    type="url"
                    name="url"
                    placeholder="link"
                    onChange={handleChange}
                  />
                  <label for="floatingInput">Link</label>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="floatingInput2"
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                />
                <label for="floatingInput2">Title</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="floatingInput3"
                  type="text"
                  name="content"
                  placeholder="Description"
                  onChange={handleChange}
                />
                <label for="floatingInput3">Description</label>
              </div>
              <select
                onChange={handleChange}
                name="brand"
                className="form-select"
              >
                <option defaultChecked>Please Choose Source</option>
                <option value="facebook">Facebook</option>
                <option value="linkedIn">LinkedIn</option>
                <option value="instagram">Instagram</option>
                <option value="youtube">Youtube</option>
                <option value="twitter">Twitter</option>
                <option value="github">Github</option>
                <option value="reddit">Reddit</option>
                <option value="pinterest">Pinterest</option>
                <option value="other">Other</option>
              </select>

              <div className="homeBtnContainer2">
                <button type="submit" className="registerBtn">
                  Add Link
                </button>
                <button
                  onClick={handleAdd}
                  className="registerBtn homeBtnCancel"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* READ, UPDATE, DELETE */}
      {!filterPosts ? (
        "Loading.."
      ) : (
        <div className={!isAdd ? "editHide" : ""}>
          {filterPosts.map((i) =>
            isEdit && i.id === editId ? (
              <div className="editContainer">
                <form onSubmit={handleConfirmEdit} className="homeForm">
                  <div className="registerFormContainer">
                    <h1 className="registerHeading">Edit</h1>
                    <div className="labelContainer">
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="floatingInput"
                          type="url"
                          name="url"
                          placeholder={i.url}
                          value={formData.url}
                          onChange={handleChange}
                        />
                        <label for="floatingInput">Link</label>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="floatingInput2"
                        type="text"
                        name="title"
                        placeholder={i.title}
                        value={formData.title}
                        onChange={handleChange}
                      />
                      <label for="floatingInput2">Title</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="floatingInput3"
                        type="text"
                        name="content"
                        placeholder={i.content}
                        value={formData.content}
                        onChange={handleChange}
                      />
                      <label for="floatingInput3">Description</label>
                    </div>

                    <select
                      onChange={handleChange}
                      name="brand"
                      className="form-select"
                    >
                      <option defaultChecked>Please Choose Source</option>
                      <option value="facebook">Facebook</option>
                      <option value="linkedIn">LinkedIn</option>
                      <option value="instagram">Instagram</option>
                      <option value="youtube">Youtube</option>
                      <option value="twitter">Twitter</option>
                      <option value="github">Github</option>
                      <option value="reddit">Reddit</option>
                      <option value="pinterest">Pinterest</option>
                      <option value="other">Other</option>
                    </select>

                    <div className="homeBtnContainer2">
                      <button type="submit" className="registerBtn">
                        Confirm
                      </button>
                      <button
                        onClick={() => setIsEdit(!isEdit)}
                        className="registerBtn homeBtnCancel"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div className={isEdit ? "editHide" : ""}>
                <Links
                  url={i.url}
                  title={i.title}
                  text={i.content}
                  brand={i.brand}
                  uniKey={i.id}
                  edit="edit"
                  editevent={() => handleEdit(i.id)}
                  del="delete"
                  deleteevent={() => handleDelete(i.id)}
                />
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
