import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import MapContainer from "./components/MapContainer.js";
import { connect } from "react-redux";
import { fetchPlaceSuccess, setPlace } from "./actions/actions";

class App extends Component {
  componentDidMount() {
    fetch(`http://apis.fretron.com/shipment-view/places/page/places?size=50`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NzMxMDMwMDEsInVzZXJJZCI6IjAwZTEzODAyLTI3ZjEtNGM4OC04ZmIyLWRkN2VjMmM3NmZkNSIsImVtYWlsIjoiYWthc2guZHV0dGFAZnJldHJvbi5jb20iLCJtb2JpbGVOdW1iZXIiOiI5Nzc2MjE3NzY5Iiwib3JnSWQiOiI1OTk5ODkxNi0yY2U3LTQ5NmQtOTRkNC00MjBiZTk2MTVmNDUiLCJuYW1lIjoiQUtBU0ggRFVUVEEiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.ATJ1OMG2Fy5PwvXho3nSCweYUwRLdzK8ah-XOe36gBs"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.props.successAction(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Body">
          <div
            style={{
              width: "30vw",
              overflow: "auto",
              height: "calc(100vh - 3.2rem)",
              color:this.props.color,
              backgroundColor: this.props.bColor
            }}
          >
            {this.props.places.map((item, index) => (
              <div
                className="Item"
                key={index}
                onClick={() => this.setDetail(item)}
              >
                <div>{item.name}</div>
                <div style={{ fontSize: "14px" }}>{item.address}</div>
              </div>
            ))}
          </div>

          <div style={{ width: "70vw" }}>
            {this.props.place ? this.props.place.name : ""}
            <MapContainer place={this.props.place} />
          </div>
        </div>
      </div>
    );
  }
  componentDidUpdate(e) {
    console.log(e);
  }
  setDetail(selected) {
    this.props.setDetailAction(selected);
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.placeState,
    ...state.colorState
  };
};

const mapDispatchToProps = dispatch => ({
  successAction: data => dispatch(fetchPlaceSuccess(data)),
  setDetailAction: data => dispatch(setPlace(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
