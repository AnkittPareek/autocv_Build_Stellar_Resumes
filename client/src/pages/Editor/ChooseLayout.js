import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Layout1 from "../Layouts/Template1/Index";
import Layout2 from "../Layouts/Template2/Index";

const ChooseLayout = ({ selectedLayout, setSelectedLayout }) => {
  const [layouts, setLayouts] = useState([]);

  useEffect(() => {
    let layoutData = [
      {
        id: 1,
        image: "",
        title: "Sample Layout 1",
      },
      {
        id: 2,
        image: "",
        title: "Sample Layout 2",
      },
    ];
    setLayouts(layoutData);
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4">Choose a layout</h2>
      <div className="row">
        {layouts.map((layout) => (
          <div key={layout.id} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={layout.image} />
              <Card.Body>
                <Card.Title>{layout.title}</Card.Title>
                <Button
                  variant="primary"
                  onClick={() => setSelectedLayout(layout)}
                >
                  Select Layout
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseLayout;
