import { Route, Routes } from "react-router-dom";
import { SubscribeArea } from "../widgets/SubscribeArea";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SubscribeArea />} />
    </Routes>
  );
};
