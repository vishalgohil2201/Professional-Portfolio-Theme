import BlogCard from '../../Common Component/Blog-Card';

const bi = [
    {
        img: require('../../Assets/blog-1.jpg'),
        head: 'THE COMPANY PASSAGES',
        date: '12 Feb 2023',
        info: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        img: require('../../Assets/blog-2.jpg'),
        head: 'THE STANDARD BOOK',
        date: '20 Mar 2023',
        info: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        img: require('../../Assets/blog-3.jpg'),
        head: 'LOREM SIMPLY DUMMY',
        date: '06 May 2023',
        info: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        img: require('../../Assets/blog-4.jpg'),
        head: 'HOW TO CREATE FAMES',
        date: '17 Jul 2023',
        info: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        img: require('../../Assets/blog-5.jpg'),
        head: 'CONTRARY TO POPULAR',
        date: '28 July 2023',
        info: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        img: require('../../Assets/blog-6.jpg'),
        head: 'THERE MANY CONTENT',
        date: '11 Aug 2023',
        info: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
]

const Blog = () => {
    return (
        <>
            <section className="blog spaceY">
                <div className="container h-spacer px-3 px-sm-0">
                    <div className="title-part text-center">
                        <h3 className="section-title">MY <span className="body-color">BLOGS</span></h3>
                        <span className="separator"></span>
                    </div>
                    <div className="main row">
                        <BlogCard blogitems={bi}></BlogCard>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;