import './App.css';
import InteractiveBar from './Components/InteractiveBar';


function App() {
    const imagesArray = [
        { url: 'https://th.bing.com/th/id/R.22a38730db519968e078d1139bd2b0d6?rik=JDOd%2b8W895O0pw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-2L4Mqta2KD4%2fUwZfVWdPvFI%2fAAAAAAAALLc%2f1TZyy1lMOBk%2fs1600%2fcuadros-abstractos-modernos-en-arte-decorativo.jpg&ehk=2BvWpDtB%2fQsNXw8E5UpEKlkAsxcrgVvEgJbqc1yYTR8%3d&risl=&pid=ImgRaw&r=0', title: 'Noche Loca' },

        { url: 'https://http2.mlstatic.com/cuadro-en-tela-mariposa-arte-abstracto-moderno-decorativo-D_NQ_NP_920107-MLM28796445232_112018-F.jpg', title: 'Mari' },
      
        { url: 'https://decohunter.com/wp-content/uploads/2020/05/imagenes-para-cuadros-3.jpg', title: 'PARIS' },
    ];
        return(    
    <div className='App'>
        <InteractiveBar/>
        <Cuadros images={imagesArray} />
    </div>
);
}

export default App;
