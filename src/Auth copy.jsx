import React from "react";
import Axios from "axios";

const API_URL = `http://localhost:8081`;

class Auth extends React.Component {
  state = {
    idFilm : "",
    formMovie: {
      // id: 0,
      name: "",
      year: "",
      description: "",
    }
  };

  addHandler = () => {
    Axios.post(`${API_URL}/movies/new`, {
      id: 0,
      name: this.state.formMovie.name,
      year: this.state.formMovie.year,
      description: this.state.formMovie.description,
    })
    .then((res) => {
      console.log(res.data);
      alert("Tambah Movie berhasil");
    })
    .catch((err) => {
      console.log(err);
        alert("Tambah Movie gagal");
    });
  }

  deleteHandler = () => {
    Axios.delete(`${API_URL}/movies/${this.state.idFilm}`, {
    })
    .then((res) => {
      console.log(res.data);
      alert("Hapus Movie berhasil");
    })
    .catch((err) => {
      console.log(err);
        alert("Hapus Movie gagal");
    });
  }

  suntingHandler = () => {
    Axios.put(`${API_URL}/movies/edit/${this.state.idFilm}`, {
      name: this.state.formMovie.name,
      year: this.state.formMovie.year,
      description: this.state.formMovie.description,
    })
    .then((res) => {
      console.log(res.data);
      alert("Update Movie berhasil");
    })
    .catch((err) => {
      console.log(err);
        alert("Update Movie gagal");
    });
  }

  updateHandler = () => {
    Axios.get(`${API_URL}/movies/${this.state.idFilm}`, {
    })
    .then((res) => {
      console.log(res.data.description);
      this.setState({
        formMovie: {
          ...this.state.formMovie,
          name: res.data.name,
          year: res.data.year,
          description: res.data.description,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });

  }

  inputHandler = (event, key) => {
    const { value } = event.target;

    this.setState({
      formMovie: {
        ...this.state.formMovie,
        [key]: value,
      },
    });
    console.log(this.state.formMovie)
  };

  inputHandler2 = (event) => {
    const { value } = event.target;

    this.setState({idFilm: value});

    console.log(this.state.idFilm)
  }

  render() {
    return (
      <div>
        <h3>CRUD MOVIE add Screen</h3>
        <h5>Judul Film </h5>
        <input type="text" onChange={(e) => this.inputHandler(e, "name")} />
        <h5>Tahun</h5>
        <input type="text" onChange={(e) => this.inputHandler(e, "year")} />
        <h5>Deskripsi</h5>
        <input type="text" onChange={(e) => this.inputHandler(e, "description")} />
        <br />
        <input type="button" value="Tambah Film" onClick={this.addHandler} />

        <br />
        <strong>ID film</strong> <br/>
        <input type="text" onChange={(e) => this.inputHandler2(e)} /><br/>
        <input type="button" value="Edit Film" onClick={this.updateHandler} />
        <input type="button" value="Hapus Film" onClick={this.deleteHandler} />
        <h3>CRUD MOVIE update Screen</h3>
        <h5>Judul Film </h5>
        <input type="text" value={this.state.formMovie.name} onChange={(e) => this.inputHandler(e, "name")} />
        <h5>Tahun</h5>
        <input type="text" value={this.state.formMovie.year}  onChange={(e) => this.inputHandler(e, "year")} />
        <h5>Deskripsi</h5>
        <input type="text" value={this.state.formMovie.description}  onChange={(e) => this.inputHandler(e, "description")} />
        <br />
        <input type="button" value="Sunting Film" onClick={this.suntingHandler} />
      </div>
    );
  }
}

export default Auth;