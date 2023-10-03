import VideoList from './components/VideoList';
import list from './data/data.json';
import './App.css'

export default function App() {
 
  return (
    <VideoList props={list} />
  );
}