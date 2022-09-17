import { FaListOl, FaPlus, FaFileSignature, FaTh } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__item">
        <Link to='/' className='sidebar__text'>
          <FaTh /> Admin Anasayfa
        </Link>
      </div>
      <div className="sidebar__item">
        <div className="sidebar__text"><FaFileSignature /> Blog</div>
        <div className="sidebar__sub">
          <Link to='/admin/blog-list' className='sidebar__sub-item'>
            <FaListOl /> Blog Listesi
          </Link>
          <Link to='/admin/blog-add' className='sidebar__sub-item'>
            <FaPlus /> Blog Ekle
          </Link>
        </div>
      </div>
      <div className="sidebar__item">
        <div className="sidebar__text"><FaFileSignature /> Proje</div>
        <div className="sidebar__sub">
          <a href="#" className='sidebar__sub-item'>
            <FaListOl /> Proje Listesi
          </a>
          <a href="#" className='sidebar__sub-item'>
            <FaPlus /> Proje Ekle
          </a>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar