import React from 'react';
import { Link } from 'react-router-dom';
import '../Blog.css'; // Archivo CSS correspondiente

const blogs = [
  {
    id: 1,
    title: 'Beneficios del Entrenamiento Personalizado',
    summary: 'Descubre cómo un plan de entrenamiento adaptado a tus necesidades puede transformar tu vida física y mental.',
    image: '/images/beneficios.jpg',
    path: '/blog1',
  },
  {
    id: 2,
    title: 'Cómo Mantener la Motivación Durante tu Rutina',
    summary: 'Te damos consejos prácticos para mantener el enfoque y la motivación mientras trabajas en tus objetivos.',
    image: '/images/motivacion.jpg',
    path: '/blog2',
  },
  {
    id: 3,
    title: 'La Importancia de la Nutrición en el Deporte',
    summary: 'Aprende cómo la alimentación adecuada puede mejorar tu rendimiento, ayudarte a alcanzar tus metas deportivas y mantenerte saludable.',
    image: '/images/nutricion.png',
    path: '/blog3',
  },
];

const Blog = () => {
  return (
    <div className="blog-section">
      <h1 className="blog-title">Mi Blog</h1>
      <div className="blog-cards-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-card-title">{blog.title}</h2>
              <p className="blog-summary">{blog.summary}</p>
              <Link to={blog.path} className="blog-button">
                Leer más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
