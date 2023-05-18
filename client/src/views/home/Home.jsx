import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { AuthContext } from "../../context/AuthContext";
import Links from "../../components/links/Links";
import axios from "axios";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Home = ({ postsData, profilePictureData }) => {
  const { user } = useContext(AuthContext);
  let username = localStorage.getItem("username");
  // This is removing the quotes around the value in localstorage.
  if (username != null) {
    username = username.replace(/^"(.*)"$/, "$1");
  }

  // FIlTER DATA
  const filterPosts = postsData.filter(
    (post) => post.author_username === username
  );
  const profilePic = profilePictureData.filter(
    (pic) => pic.author_username == username
  );

  // VARIABLES
  const [isAdd, setIsAdd] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isPic, setIsPic] = useState(false);
  const [editId, setEditId] = useState(null);
  const [picId, setPicId] = useState(null);
  const [newPicData, setNewPicData] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    brand: "other",
    url: "",
  });

  // Assigns the users picture id.
  useEffect(() => {
    if (profilePic.length > 0 && profilePic[0].id) {
      setPicId(profilePic[0].id);
    }
  }, [profilePic]);

  // ON CHANGE EVENTS
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePicChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setNewPicData(formData);
  };

  // HEADERS
  const config = {
    headers: {
      Authorization: "Token " + user.token,
      "Content-Type": "application/json",
    },
  };
  const picConfig = {
    headers: {
      Authorization: "Token " + user.token,
      "Content-Type": "multipart/form-data",
    },
  };

  // ADD LINK
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

  // EDIT LINK
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

  // DELETE LINK
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api-posts/${id}/`, config)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // EDIT PROFILE PICTURE
  const handleProfilePic = (e) => {
    setIsPic(!isPic);
  };
  const handlePicEdit = (e) => {
    e.preventDefault();
    setIsPic(!isPic);
    if (picId) {
      axios
        .put(
          `http://localhost:8000/profile-images/${picId}/`,
          newPicData,
          picConfig
        )
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:8000/profile-images/", newPicData, picConfig)
        .then((res) => {
          console.log(res.data);
          setPicId(res.data.id);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="homeContainer">
      <div className="homeProfileContainer">
        <div className="homeImageContainer">
          <img
            src={
              !profilePic || profilePic.length === 0
                ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                : profilePic[0].image
            }
            className="homeProfileImage"
          />
        </div>

        <span onClick={handleProfilePic} className="homeEditProfilePic">
          {!isPic ? <AddIcon /> : <RemoveIcon />}
        </span>

        {!isPic ? null : (
          <div className="editContainer">
            <form className="homeForm" onSubmit={handlePicEdit}>
              <div className="registerFormContainer">
                <h1 className="registerHeading">Profile Picture</h1>
                <div className="labelContainer">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="floatingInput"
                      type="file"
                      name="image"
                      placeholder="link"
                      onChange={handlePicChange}
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="homeBtnContainer2">
                  <button type="submit" className="registerBtn">
                    Add Profile Picture
                  </button>
                  <button
                    onClick={handleProfilePic}
                    className="registerBtn homeBtnCancel"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        <h2 className="homeProfileUsername">{username}</h2>
      </div>

      {/* CREATE LINK */}
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

      {/* READ, UPDATE, AND DELETE LINK */}
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
              <div className={isPic ? "editHide" : ""}>
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
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
