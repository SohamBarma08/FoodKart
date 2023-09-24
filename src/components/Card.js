import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="---" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              This is some random text. This is description.
            </p>
            <div className="container w-100 ">
              <select className="m-2 h-100 w-20 bg-success text-black rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 w-20 bg-success text-black rounded">
                <option value="half">half</option>
                <option value="full">full</option>
              </select>
              <div className=" d-inline ms-2 h-100 w-20 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
