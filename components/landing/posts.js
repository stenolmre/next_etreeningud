import React, { useEffect, Fragment } from "react";
import Link from "next/link";

import { usePostState, usePostDispatch } from "./../../context/post";
import { getPosts } from "./../../actions/post";

import Loader from "./../utils/loader";
import Card from "./../posts/card";

const Fitness = () => {
  const dispatchPost = usePostDispatch();
  const { posts, loading } = usePostState();

  useEffect(() => {
    getPosts(dispatchPost);
  }, [dispatchPost]);

  return (
    <div className="landing_fitness_container">
      {loading ? (
        <div className="landing_section_loader">
          <Loader />
        </div>
      ) : (
        <Fragment>
          <h2>Viimased postitused</h2>
          <div className="landing_fitness">
            {posts &&
              posts.map((el) => <Card key={el._id} post={el} />).slice(0, 3)}
            <Link href="/posts" className="mobile_see_more_btn">
              <i className="fas fa-plus neumorphism" />
            </Link>
          </div>
          <Link href="/posts" className="landing_fitness_btn neumorphism">
            <i className="fas fa-plus" />
          </Link>
        </Fragment>
      )}
    </div>
  );
};

export default Fitness;
