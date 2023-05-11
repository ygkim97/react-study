import React, { useState } from "react";
import "./list-box.css";

export interface Post {
  id: Number;
  title: string;
  contents: string;
  likes: number;
}

function ListBox() {
  let [post, setPost] = useState<Post[]>([
    { id: 1, title: "제목1", contents: "내용1", likes: 0 },
    { id: 2, title: "제목2", contents: "내용2", likes: 0 },
    { id: 3, title: "제목3", contents: "내용3", likes: 0 }
  ]);

  return (
    <div className="list-box">
      <h1>목록</h1>
      <div>
        {post.map((el: Post, i) => {
          return (
            <div className="list" key={"post_" + el.id}>
              <h4>{el.title}</h4>
              <p>{el.contents}</p>
              <div className="list-bottom">
                <span
                  onClick={() => {
                    let _post = [...post];
                    _post[i].likes = _post[i].likes + 1;
                    setPost(_post);
                  }}
                >
                  👍🏻{el.likes}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListBox;
