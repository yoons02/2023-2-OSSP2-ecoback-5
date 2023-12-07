// Manager.js
import React, { useState, useRef } from "react";
import API from "api/axios";
import BackbuttonBar from '../../components/BackbuttonBar';
import TitleBanner from '../../components/TitleBanner.js';
import "../../css/Add/add.css";
const Manager = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [fileName, setFileName] = useState('이미지');
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const fileName = file ? file.name : '이미지';
    setFileName(fileName);
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handleSubmit = async () => {
    const endpoint = "market/categories/add_category/";
    const access_token = localStorage.getItem('access');

    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', name);

      const response = await API.post(endpoint, formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("API 응답:", response);

      alert("성공적으로 전송되었습니다.");
      window.location.reload(true);

    } catch (e) {
      console.error("API 오류: ", e);

      alert("전송에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="full_container">
      <div>
        <TitleBanner />
      </div>
      <hr />
      <BackbuttonBar title="카테고리 추가" />
      <hr />
      <label htmlFor="image">이미지:</label>
      <center>
      <div className="filebox">
        <input className="upload-name" value={fileName} placeholder="이미지" readOnly />
        <label htmlFor="ex_file"> 찾기 </label>
        <input
          type="file"
          id="ex_file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>
      </center>
      <div>
        <label htmlFor="name">이름:</label>
        <br/>
        <center>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </center>
      </div>
      <center>
        <button className="button" onClick={handleSubmit}>등록</button>
      </center>
    </div>
  );
};

export default Manager;
