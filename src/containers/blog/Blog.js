import React from 'react';
import './blog.css';
import {Article} from "../../components";
import { article, articleTwo, articleThree, articleFour, articleFive } from './imports';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, <br/> We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={article} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={articleTwo} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imgUrl={articleThree} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imgUrl={articleFour} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imgUrl={articleFive} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>
            </div>
        </div>
    );
};

export default Blog;