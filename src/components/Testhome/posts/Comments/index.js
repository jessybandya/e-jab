import React, { useState } from "react";
import { Divider, Input, Comment, List, Button } from "antd";
import { connect } from "react-redux";
import moment from "moment";

function Comments() {
  return (
    <>
    {/* <Post post={props.post} /> */}
    <div className="ml-4 pl-2 mr-4 pr-2">
      <div className="comment__details">
        <div className="comments">
          {/* {props.post.comments && ( */}
            <List
              className="comment-list"
            //   header={`${props.post.comments.length} ${
            //     props.post.comments.length > 1 ? "comments" : "comment"
            //   }`}
              itemLayout="horizontal"
            //   dataSource={props.post.comments}
              renderItem={(item) => (
                <li>
                  {/* <Comment
                    author={item.userHandle}
                    avatar={item.userImage}
                    content={item.body}
                    datetime={moment(item.createdAt)
                      .startOf("seconds")
                      .fromNow()}
                  /> */}
                </li>
              )}
            />
          {/* )} */}
        </div>
        <div className="comment-form">
          <Divider style={{backgroundColor:"#fff"}}/>
          <div className="d-flex">
            <Input
            //   onChange={(e) => setComment(e.target.value)}
              size="default"
              allowClear
              placeholder="type comment"
            //   value={comment}
            />
            <Button >
              Submit
            </Button>
          </div>
          {/* {errors && <span className="text-danger">{errors}</span>} */}
        </div>
      </div>
    </div>
  </>
  )
}

export default Comments