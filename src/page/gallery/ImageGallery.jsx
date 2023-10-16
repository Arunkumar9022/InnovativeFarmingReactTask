import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";

function ImageGallery() {
  const navigate=useNavigate();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [editingImage, setEditingImage] = useState(null);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("images")) || [];
    setImages(savedImages);
  }, []);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const newImages = selectedFiles.map((file) => ({
      title,
      url: URL.createObjectURL(file),
    }));

    setImages([...images, ...newImages]);
    setSelectedImage(null);
    setTitle("");
    localStorage.setItem("images", JSON.stringify([...images, ...newImages]));
  };

  const handleAddImage = () => {
    if (title && selectedImage) {
      const newImageItem = {
        title,
        url: selectedImage,
      };
      setImages([...images, newImageItem]);
      setSelectedImage(null);
      setTitle("");
      localStorage.setItem("images", JSON.stringify([...images, newImageItem]));
    }
  };

  const handleEditImage = () => {
    if (editingImage) {
      const updatedImages = images.map((image) =>
        image.url === editingImage.url ? { ...editingImage } : image
      );
      setImages(updatedImages);
      localStorage.setItem("images", JSON.stringify(updatedImages));
      setEditingImage(null);
    }
  };

  const handleDeleteImage = () => {
    if (editingImage) {
      const updatedImages = images.filter(
        (image) => image.url !== editingImage.url
      );
      setImages(updatedImages);
      localStorage.setItem("images", JSON.stringify(updatedImages));
      setEditingImage(null);
    }
  };

  const handleImageSelect = (url) => {
    const selected = images.find((image) => image.url === url);

    if (selected) {
      setSelectedImage(selected.url);
      setEditingImage({ ...selected });
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImages(items);
    localStorage.setItem("images", JSON.stringify(items));
  };
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container vh-100" style={{ backgroundColor: "blanchedalmond", padding: "20px" }}>
    <div className="d-flex justify-content-end align-items-end">
    <button onClick={handleLogout} className="btn btn-dark px-5 py-2 rounded-pill">Logout</button>
  </div>  
    <h2 className="mt-4">Image Gallery</h2>
    
      <div className="row mt-4">
        <div className="col-md-4 col-sm-12">
          <div className="mb-3">
            <input type="file" accept="image/*" onChange={handleImageChange} multiple />
            {selectedImage && <img src={selectedImage} alt="Selected" className="img-fluid" />}
            <input
              type="text"
              placeholder="Image Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {editingImage ? (
              <div>
                <button className="btn btn-success px-5 py-2 rounded-pill" onClick={handleEditImage}>Save</button>
                <button className="btn btn-warning px-5 py-2 rounded-pill" onClick={handleDeleteImage}>Delete</button>
              </div>
            ) : (
              <button className="btn btn-dark px-5 py-2 rounded-pill" onClick={handleAddImage}>Add Image</button>
            )}
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="image-gallery">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="image-list row"
                >
                  {images.map((image, index) => (
                    <Draggable key={image.url} draggableId={image.url} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`col-lg-4 col-md-6 col-sm-12 image-item ${
                            editingImage && editingImage.url === image.url ? 'editing' : ''
                          }`}
                        >
                          <div className="mb-3">
                            <img
                              src={image.url}
                              alt={image.title}
                              onClick={() => handleImageSelect(image.url)}
                              className="img-fluid"
                            />
                            {editingImage && editingImage.url === image.url ? (
                              <input
                                type="text"
                                value={editingImage.title}
                                onChange={(e) => setEditingImage({ ...editingImage, title: e.target.value })}
                              />
                            ) : (
                              <span>{image.title}</span>
                            )}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
