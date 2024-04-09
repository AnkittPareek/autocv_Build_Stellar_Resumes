import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { LAYOUT_DATA } from "../../constants";

const ChooseLayout = ({ setSelectedLayout }) => {
  const [layouts, setLayouts] = useState([]);

  useEffect(() => {
    let layoutData = LAYOUT_DATA;
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
                  onClick={() => setSelectedLayout(layout.id)}
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
