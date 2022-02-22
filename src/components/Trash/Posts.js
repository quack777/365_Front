import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import TrashOneDeleteModal from "./TrashOneDeleteModal";
import delete_normal from "../../styles/images/delete_normal.png";
import restore_normal from "../../styles/images/restore_normal.png";
import Line from "../../styles/images/Line45.png";

const Posts = ({ revert, setPosts, posts, member }) => {
    const history = useHistory();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [clickAN, setClickAN] = useState();

    const oneRemove = (answer_num, answer_delete) => {
        setOpenDeleteModal(true);
        setClickAN([answer_num, answer_delete]);
    };

    return (
        <section>
            {posts.map((data) => {
                return (
                    <div key={data.answer_num}>
                        <hr></hr>
                        <div className="question">
                            <p>
                                {data.answer_date && data.answer_date.substring(0, 2)}월{" "}
                                {data.answer_date && data.answer_date.substring(2, 4)}일
                            </p>
                            <p>{data.question}</p>
                        </div>
                        <div className="answers">
                            <p>{data.answer_year}년의 나:</p>
                            <p>{data.answer}</p>
                        </div>
                        <div className="btns">
                            <img
                                onClick={() =>
                                    revert(data.answer_num, data.answer_delete, data.delete_date, data.question_num)
                                }
                                alt="복원"
                                src={restore_normal}
                            ></img>
                            <img alt="line" src={Line}></img>
                            <img
                                onClick={() => oneRemove(data.answer_num, data.answer_delete)}
                                alt="삭제"
                                src={delete_normal}
                            ></img>
                        </div>
                    </div>
                );
            })}
            {openDeleteModal ? (
                <TrashOneDeleteModal
                    clickAN={clickAN}
                    member={member}
                    posts={posts}
                    setPosts={setPosts}
                    setOpenDeleteModal={setOpenDeleteModal}
                    history={history}
                />
            ) : null}
        </section>
    );
};
export default Posts;
