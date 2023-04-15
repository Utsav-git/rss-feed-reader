/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard_body">
      <div className="dashboard_container_1">
        <div className="container_1_header">
          <div className="title">
            <a href="#">A</a>
            <p>Title</p>
          </div>
          <div className="add_button_container">
            <button>Add</button>
          </div>
        </div>
        <div className="container_1_body">
          <div className="container_1_list_items">
            <ul className="list_items">
              <li>
                <div className="list_item">
                  <a href="#">1</a>
                  <p>All Feeds</p>
                </div>
                <small>20</small>
              </li>
              <li>
                <div className="list_item">
                  <a href="#">1</a>
                  <p>Favourites</p>
                </div>
                <small>20</small>
              </li>
              <li>
                <div className="list_item">
                  <a href="#">1</a>
                  <p>Unread Articles</p>
                </div>
                <small>20</small>
              </li>
              <li>
                <div className="list_item">
                  <a href="#">1</a>
                  <p>Recently Read</p>
                </div>
                <small>20</small>
              </li>
              <li>
                <div className="list_item">
                  <a href="#">1</a>
                  <p>Saved Articles</p>
                </div>
                <small>20</small>
              </li>
              <li>
                <div className="list_item">
                  <button>Up Arrow</button>
                  <p>Show Less</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dashboard_container_2">Container-2</div>
      <div className="dashboard_container_3">Container-3</div>
    </div>
  );
};

export default Dashboard;
