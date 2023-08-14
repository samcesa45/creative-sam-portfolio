import React from "react";
import Photo from "@/components/frame";
import Modal from "@/components/modal";
import photos from "@/photo";

type Props = {};

const PhotoModal = ({ params }: { params: { id: string } }) => {
  const photo = params.id && photos.find((p) => p.id === params.id);
  return (
    <Modal>
      <Photo photo={photo} />
    </Modal>
  );
};

export default PhotoModal;
