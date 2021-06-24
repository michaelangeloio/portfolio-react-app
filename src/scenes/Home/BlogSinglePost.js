import React from "react";
import { FaCheck } from "react-icons/fa";
import { Container } from "react-grid-system";
// Components
import GoBack from "../../components/common/GoBack";

function BlogSinglePost() {
    return (
        <section className="section section-single-post section-single-post-1">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="post">
                            <div className="post-head">
                                <div class="post-info">
                                    <GoBack />
                                    <h1>The Best Sale Marketer Of The Next Year</h1>
                                    <p>
                                        by <span className="author">Miranda Smith</span> in <span className="category">Business</span> on <span class="date">May 1, 2020</span>.
                                    </p>
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="/assets/images/blog/1.jpg" alt="Single Post" />
                                </div>
                                <div className="post-content">
                                    <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blanditvel, luctus pulvinar, hendrerit id, lorem.</p>
                                    <p>
                                        <b>Key Features:</b>
                                    </p>
                                    <ul class="el-list-check">
                                        <li>
                                            <FaCheck className="icon" />
                                            Clean Code
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Modern Design
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            Great Support
                                        </li>
                                        <li>
                                            <FaCheck className="icon" />
                                            High Resolution
                                        </li>
                                    </ul>
                                    <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
                                    <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
                                </div>
                                <div class="post-tags">
                                    <span>Tags:</span>
                                    <ul>
                                        <li>
                                            <a href="/#">Business</a>
                                        </li>
                                        <li>
                                            <a href="/#">Marketing</a>
                                        </li>
                                        <li>
                                            <a href="/#">Corporate</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default BlogSinglePost;
