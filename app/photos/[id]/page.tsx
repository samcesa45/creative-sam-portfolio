"use client";
import Image from "next/image";
import React from "react";
import Photo from "@/components/frame";
import photos from "@/photo";

type Props = {};

const PhotoPage = ({ params }: { params: { id: string } }) => {
  const photo = photos.find((p) => p.id === params.id);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Photo photo={photo} />
      </div>
    </div>
  );
};

export default PhotoPage;
