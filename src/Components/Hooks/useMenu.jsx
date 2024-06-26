import React, { useEffect, useState } from "react";

const UseMenu = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
        setLoading(true);
      });
  }, []);
  return [popular, loading];
};

export default UseMenu;
