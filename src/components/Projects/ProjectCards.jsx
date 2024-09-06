import React from "react";
import { Card, Button } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProjectCards(props) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/projectDetail", { state: { ...props } });
  };

  const truncateDescription = (description) => {
    return description.length > 60 ? description.substring(0, 60) + "..." : description;
  };

  return (
    <Card  className="cursor-pointer project-card-view" onClick={handleNavigate}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{truncateDescription(props.description)}</Card.Text>
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp; GitHub
        </Button>
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
