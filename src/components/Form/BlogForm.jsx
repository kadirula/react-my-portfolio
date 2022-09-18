import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { addBlog, getAllCategory } from '../../firebase';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];



const BlogForm = () => {


    const user = useSelector((state) => JSON.parse(state.auth.user));

    const initialState = {
        authorId: `${user.uid}`,
        categoryId: '',
        title: '',
        content: '',
        createdAt: `${new Date()}`,
    }

    const [form, setForm] = useState(initialState);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const categoryData = await getAllCategory();
            setCategories(categoryData);
        }

        getData();
    }, []);


    const { title, content, categoryId } = form;

    const onCategoryChange = (e) => {
        setForm({ ...form, categoryId: e.target.value });
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleContent = (e) => {
        setForm({ ...form, content: e });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setForm({ ...form, form });

        await addBlog(form);

    }
    return (
        <form className="blog-form" onSubmit={handleSubmit}>
            <div className="blog-form__item mb-4">
                <label className='form-label d-block'>Author</label>
                <select
                    value={categoryId}
                    onChange={onCategoryChange}
                    className="form-control"
                >
                    <option>Lütfen bir kategori seçiniz</option>
                    {categories.map((option, index) => (
                        <option value={option.id || ""} key={index}>
                            {option.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className="blog-form__item mb-4">
                <label className='form-label d-block'>Title</label>
                <input type="text" name='title' className='form-control' value={title} onChange={handleChange} />
            </div>
            <div className="blog-form__item mb-4">
                <label className='form-label d-block'>Content</label>
                <ReactQuill theme="snow" value={content} onChange={handleContent}
                    modules={modules}
                    formats={formats}>
                </ReactQuill>
            </div>
            <div className="blog-form__item mb-4">
                <button type='submit' className='btn btn-sm btn-success'>Kaydet</button>
            </div>

        </form>
    )
}

export default BlogForm