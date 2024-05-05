import { useState } from "react";

const initialForm = {
  fullname: "",
  age: "",
  position: "",
};

function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(initialForm);

  const handleSubmit = () => {
    console.log(form);
    setData((prevData) => [form, ...prevData]);

    setForm({
      fullname: "",
      age: "",
      position: "",
    });
  };

  const handleChangeForm = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    const callback = (prevForm) => {
      const newForm = { ...prevForm, [name]: value };
      return newForm;
    };
    setForm(callback);
  };

  const handleRemove = (num) => {
    setData(data.filter((item, number) => num !== number));
  };
  // const removeEl = (num) => {
  //   const filterData = data.filter((item, number) => num !== number);
  //   return setData(filterData);
  // };

  const disableBtn =
    !form.fullname?.trim() || !form.position?.trim() || !form.age;
  return (
    <div className="form d-flex">
      <div className="form-content d-flex flex-column gap-2 w-25 bg-danger min-vh-100 p-3">
        <input
          onChange={handleChangeForm}
          className="form-control"
          type="text"
          value={form.fullname}
          placeholder="Fullname"
          name="fullname"
        />
        <input
          onChange={handleChangeForm}
          className="form-control"
          type="text"
          value={form.age}
          placeholder="Age"
          name="age"
        />
        <input
          onChange={handleChangeForm}
          className="form-control"
          type="text"
          value={form.position}
          placeholder="Position"
          name="position"
        />
        <button
          disabled={disableBtn}
          onClick={handleSubmit}
          className="btn btn-success"
        >
          Send
        </button>
      </div>
      <div className="rightSection w-75 p-3">
        <h1 className="text-center">Table</h1>
        <div className="table-conetent">
          <table className="table text-center">
            <thead className="table-dark">
              <tr>
                <th>Fullname</th>
                <th>Age</th>
                <th>Position</th>
                <th></th>
              </tr>
            </thead>
            {data?.map((item, index) => {
              return (
                <tbody key={"tbody-" + index}>
                  <tr>
                    <td>{item.fullname}</td>
                    <td>{item.age}</td>
                    <td>{item.position}</td>
                    <td>
                      <button
                        onClick={() => handleRemove(index)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
