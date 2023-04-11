import React, { useState } from "react";
import Cards from "../../components/cards/Cards";
import "./education.css";
import axios from "axios";

function EducationPage({ educationData }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [isAdd, setIsAdd] = useState(true);

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    years: "",
    description: "",
    ordinal: parseInt(),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    setIsAdd(!isAdd);
  };
  const handleConfirmAdd = (e) => {
    e.preventDefault();
    setIsAdd(!isAdd);
    axios
      .post(`http://localhost:8000/education/`, formData)
      .then(window.location.reload())
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    setIsEdit(!isEdit);
    setEditId(id);
  };
  const handleConfirmEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    setEditId(null);
    axios
      .put(`http://localhost:8000/education/${editId}/`, formData)
      .then(window.location.reload())
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/education/${id}/`)
      .then(window.location.reload())
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="educationContainer">
      {/* CREATE */}
      <button
        type="submit"
        onClick={handleAdd}
        className={!isAdd ? "editHide" : ""}
      >
        Add Education
      </button>
      {isAdd ? null : (
        <div className="editContainer">
          <form onSubmit={handleConfirmAdd} className="educationForm">
            <label>
              School :
              <input
                type="text"
                name="school"
                placeholder="school"
                onChange={handleChange}
              />
            </label>
            <label>
              Description :<br />
              <input
                type="text"
                name="description"
                placeholder="description"
                onChange={handleChange}
              />
            </label>
            <label>
              Degree :<br />
              <input
                type="text"
                name="degree"
                placeholder="degree"
                onChange={handleChange}
              />
            </label>
            <label>
              Ordinal :<br />
              <input
                type="text"
                name="ordinal"
                placeholder="ordinal"
                onChange={handleChange}
              />
            </label>
            <label>
              Message :<br />
              <textarea
                name="years"
                placeholder="years"
                onChange={handleChange}
              />
            </label>
            <button onClick={handleAdd}>Cancel</button>
            <button type="submit">Add Education</button>
          </form>
        </div>
        // <p>Hello</p>
      )}

      {/* READ, UPDATE, DELETE */}
      {!educationData ? (
        <h1>Loading...</h1>
      ) : (
        <div className={!isAdd ? "editHide" : ""}>
          {educationData?.map((e) =>
            isEdit && e.id === editId ? (
              <div className="editContainer">
                <form onSubmit={handleConfirmEdit} className="educationForm">
                  <label>
                    School :
                    <input
                      type="text"
                      name="school"
                      placeholder={e.school}
                      value={formData.school}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Description :<br />
                    <input
                      type="text"
                      name="description"
                      placeholder={e.description}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Degree :<br />
                    <input
                      type="text"
                      name="degree"
                      placeholder={e.degree}
                      value={formData.degree}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Ordinal :<br />
                    <input
                      type="text"
                      name="ordinal"
                      placeholder={e.ordinal}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Message :<br />
                    <textarea
                      name="years"
                      placeholder={e.years}
                      value={formData.years}
                      onChange={handleChange}
                    />
                  </label>
                  <button onClick={() => setIsEdit(!isEdit)}>Cancel</button>
                  <button type="submit">Confirm</button>
                </form>
              </div>
            ) : (
              <div className={isEdit ? "editHide" : ""}>
                <Cards
                  header={e.school}
                  title={e.description}
                  text={e.years}
                  edit="edit"
                  editevent={() => handleEdit(e.id)}
                  del="delete"
                  deleteevent={() => handleDelete(e.id)}
                  key={e.id}
                />
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default EducationPage;
