import logo from './logo.svg';
import './App.css';

function Sidebar() {
  return (
    <ul>
      <li><a href="#">Главный экран</a></li>
      <li><a href="#">Создать тренировку</a></li>
      <li><a href="#">Последняя тренировка</a></li>
      <li><a href="#">Следующая тренировка</a></li>
      <li><a href="#">Календарь</a></li>
      <li><a href="#">Список</a>
        <ol>
          <li>Тренировка 1</li>
          <li>Тренировка 2</li>
          <li>Тренировка 3</li>
          <li>Тренировка 4</li>
        </ol>
      </li>
      <li><a href="#">Мои шаблоны</a></li>
    </ul>
  );
}

function App() {
  return <Sidebar />;
}

export default App;
