import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    if (props.search) {
      return (
        <div id="empty" className="row align-items-center pt-4 pb-4">
          <div className="col-sm"></div>
          <div className="col-sm-6">
            <div className="card bg-light text-center">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="ion-sad" style={{ fontSize: "xxx-large" }}></i>
                </h5>
                <p className="card-text">
                  {`No items found for "`}
                  <b>{props.search}</b>
                  {`"`}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm"></div>
        </div>
      );
    } else {
      return <div className="py-4 no-items">No items are here... yet.</div>;
    }
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
