import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Link } from "react-router-dom";
import App from "../App";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";

const PokemonBox = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pokemon-box" id={"type-" + props.types}>
      <div className="box-pokemon-image clearfix">
        <img
          onClick={handleShow}
          id={props.name}
          alt={props.name + " image"}
          src={props.image}
        />
      </div>
      <div className="box-pokemon-details">
        <div className="box-pokemon-id">{props.id}</div>
        <div className="box-pokemon-type">{props.types}</div>
      </div>
      <div onClick={handleShow} className="box-pokemon-name" id={props.name}>
        <h3 className="pokemon-name">{props.name}</h3>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton id={props.types}>
          <div className="modal-box-pokemon-details">
            <div className="modal-box-pokemon-id">{props.id}</div>
            <div className="modal-box-pokemon-type">{props.types}</div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <div className="modal-box-pokemon-image clearfix">
              <img
                id={props.name}
                alt={props.name + " image"}
                src={props.image}
              />
            </div>
            <div className="modal-box-pokemon-description">
              <div className="modal-text-box">{props.description}</div>
              <Modal.Title className="modal-box-pokemon-name" id={props.name}>
                <h3 className="modal-pokemon-name">{props.name}</h3>
              </Modal.Title>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PokemonBox;
