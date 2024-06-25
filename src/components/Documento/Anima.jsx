import { PDFViewer } from '@react-pdf/renderer';
import React, { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import MyDocument from './Document';
import { FaWpforms } from 'react-icons/fa';

// const LoadingScreen = ({ dados, experiencias, formacoes, habilidades }) => {
//   const [loading, setLoading] = useState(true);
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 10000); // 10 segundos

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const textTimers = [
//       setTimeout(() => {
//         setTextIndex(1);
//       }, 2000), // Após 1 segundo, exibir o próximo texto
//       setTimeout(() => {
//         setTextIndex(2);
//       }, 4000), // Após 2 segundos, exibir o próximo texto
//       setTimeout(() => {
//         setTextIndex(3);
//       }, 6000), // Após 3 segundos, exibir o próximo texto
//       setTimeout(() => {
//         setTextIndex(4);
//       }, 8000) // Após 4 segundos, exibir o próximo texto
//     ];

//     return () => textTimers.forEach(clearTimeout);
//   }, []);

//   const { size } = useSpring({
//     size: loading ? 200 : 100, // Tamanho final do quadrado
//     from: { size: 100 }, // Tamanho inicial do quadrado
//     config: { duration: 1000 } // Duração da animação
//   });

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' , flexDirection:'column' }}>
//       {loading ? (
//         <animated.div
//           style={{
//             width: size,
//             height: size,
//             borderRadius: 20, // Arredondamento do quadrado
//             backgroundColor: '#3a7078',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: 'column',
//             color: 'white',
//           }}
//         >
//             <FaWpforms size={42}/>
//         </animated.div>
//       ) : (
//         <div>
//           <PDFViewer height={880} width={600}>
//             <MyDocument dados={dados} experiencias={experiencias} formacoes={formacoes} habilidades={habilidades} />
//           </PDFViewer>
//         </div>
//       )}
//       <div>
//         {loading && (
//           <div>
//             {textIndex === 1 && <p style={{ fontSize:'2em' }}>Coletando seus dados ...</p>}
//             {textIndex === 2 && <p style={{ fontSize:'2em' }}>Preparando suas Experiências ...</p>}
//             {textIndex === 3 && <p style={{ fontSize:'2em' }}>Carregando Formações ...</p>}
//             {textIndex === 4 && <p style={{ fontSize:'2em' }}>Reunindo suas habilidades ...</p>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

export default LoadingScreen;


const LoadingScreen = ({ dados, experiencias, formacoes, habilidades }) => {


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' , flexDirection:'column' }}>
     <div>
<PDFViewer height={880} width={600}>
  <MyDocument dados={dados} experiencias={experiencias} formacoes={formacoes} habilidades={habilidades} />
</PDFViewer>
</div>
    </div>
  );
};

