import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: start;
  flex-wrap: wrap;
`;

export const Box = styled(motion.div)`
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  margin-top: 1rem;
  position: relative;
`;

interface ImageBoxProps {
  image: string;
}

export const ImageBox = styled(motion.div)<ImageBoxProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image});
  background-size: cover;
  transition: transform 0.3s;
`;

export const TextBox = styled(motion.div)`
  color: #fff;
  padding: 1rem;
  background: #344;
  overflow: hidden;
  z-index: 2;
`;
