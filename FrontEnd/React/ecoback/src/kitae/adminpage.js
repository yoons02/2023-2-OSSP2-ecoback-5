// import React,{useState} from 'react';
// import { Redirect } from 'react-router-dom';
// import axios from 'axios';
// import API from 'api/axios';

// // 카테고리 수정 함수
// async function updateCategory(id, data) {
//   const response = await API.put(`/market/categories/${id}/admin_update_category`, data);
//   return response.data;
// }

// // 브랜드 수정 함수
// async function updateBrand(id, data) {
//   const response = await API.put(`/market/brands/${id}/admin_update_brand`, data);
//   return response.data;
// }

// // 상품 수정 함수
// async function updateProduct(id, data) {
//   const response = await API.put(`/market/products/${id}/admin_update_product`, data);
//   return response.data;
// }

// // 카테고리 추가 함수
// async function addCategory(data) {
//   const formData = new FormData();
//   formData.append('image', data.image);
//   formData.append('name', data.name);

//   const response = await API.post('/market/categories/add_category/', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
//   return response.data;
// }

// function AdminPage() {
//   // 관리자 권한 확인
//   const isAdmin = checkAdmin();

//   if (!isAdmin) {
//     // 관리자가 아니면 홈페이지로 리다이렉트
//     return <Redirect to="/" />;
//   }

//   // 수정할 데이터의 상태
//   const [data, setData] = useState({});

//   // 수정 함수 호출
//   const handleUpdate = async (id, updateFunction) => {
//     try {
//       const updatedData = await updateFunction(id, data);
//       console.log(updatedData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // 카테고리 추가 데이터의 상태
//     const [categoryData, setCategoryData] = useState({});
//   // 카테고리 추가 함수 호출
//     const handleAddCategory = async () => {
//     try {
//         const newCategory = await addCategory(categoryData);
//         console.log(newCategory);
//     } catch (error) {
//         console.error(error);
//     }
//     };

//   return (
//     <div>
//       <h1>Admin Page</h1>
//       {/* 관리자 페이지 내용 */}
//       {/* 카테고리 추가 폼 */}
//         <input type="file" onChange={(e) => setCategoryData({ ...categoryData, image: e.target.files[0] })} />
//         <input type="text" onChange={(e) => setCategoryData({ ...categoryData, name: e.target.value })} />
//         <button onClick={handleAddCategory}>카테고리 추가</button>
//       {/* 수정 버튼 예시 */}
//       <button onClick={() => handleUpdate(1, updateCategory)}>카테고리 수정</button>
//       <button onClick={() => handleUpdate(1, updateBrand)}>브랜드 수정</button>
//       <button onClick={() => handleUpdate(1, updateProduct)}>상품 수정</button>
//     </div>
//   );
// }

// export default AdminPage;