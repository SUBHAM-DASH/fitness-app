import React, { useState, useEffect } from "react";
import Detail from "../components/Detail";
import ExcerciseVideos from "../components/ExcerciseVideos";
import SimilarExcercises from "../components/SimilarExcercises";

import { useParams } from "react-router-dom";

import { fetchData, youtubeFetchData } from "../utils/fetchData";

const ExcersiseDetail = () => {
  const [excerciseDetail, setExcerciseDetail] = useState({});
  const [excerciseVideos, setExcerciseVideos] = useState([]);
  const [exerciseMuscelData, setExerciseMuscelData] = useState([]);
  const [equipmentExerciseData, setEquipmentExerciseData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchfunc = async () => {
      const excercisedbUrl = "https://exercisedb.p.rapidapi.com/exercises";

      const excerciseDetailData = await fetchData(
        `${excercisedbUrl}/exercise/${id}`
      );
      setExcerciseDetail(excerciseDetailData);

      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const youtubeDatas = await youtubeFetchData(
        `${youtubeSearchUrl}/search?query=${excerciseDetailData.name}`
      );
      setExcerciseVideos(youtubeDatas.contents);

      const targetMuscelExcerciseData = await fetchData(
        `${excercisedbUrl}/target/${excerciseDetailData.target}`
      );
      setExerciseMuscelData(targetMuscelExcerciseData);

      const eqipmentExcrciseData = await fetchData(
        `${excercisedbUrl}/equipment/${excerciseDetailData.equipment}`
      );
      setEquipmentExerciseData(eqipmentExcrciseData);
    };
    fetchfunc();
  }, [id]);

  return (
    <div>
      <Detail excerciseDetail={excerciseDetail} />
      <ExcerciseVideos
        excerciseVideos={excerciseVideos}
        name={excerciseDetail.name}
      />
      <SimilarExcercises
        exerciseMuscelData={exerciseMuscelData}
        equipmentExerciseData={equipmentExerciseData}
      />
    </div>
  );
};

export default ExcersiseDetail;
