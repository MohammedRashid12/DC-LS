import './App.css';
import DC from './DC.png';
import LS from './LS.png';
import linearsearch from './linearsearch.png';
import mergesort from './mergesort.png';
import lognprimegen from './lognprimegen.mp4';
import nprimegen from './nprimegen.webm'
import Myproject from './My project.png'
import G4G from './GeeksforGeeks.svg.png'
import TC from './time_complexity.png'
import linkedin from './linkedin.png'
import nprimecode from './nprimegen.txt'
import lognprimecode from './logncode.txt'
import codelogo from './code logo.png'

function App() {
  
  return (
    <body className="App" >
      <container class="container">
      <div class="title">
         <h1> Divide & Conquerer vs Linear Search </h1>
      </div>
      <div class="DC">
        <span> <span style={{position: 'relative',
        left: '-43px'}}>Divide & Conquerer </span><span class="LStext" > Linear Search</span></span> 
      </div>

      <div > 
        <img src={DC} alt="DC" class="DCimage" />
      </div>
      
      <div > 
        <img src={LS} alt="LS" class="LSimage" />
      </div>

      <div style={{position: 'relative',
        top: '-810px'
    }}>
        <h3 >Diagrams</h3>
      </div>
      
      <div style={{position: 'relative',
        top: '-580px'
    }}>
        <h3 >Explanation of Algorithms</h3>
      </div>

      <div style={{position: 'relative',
        top: '-730px', left:'180px'}}>
        <h4><b>Divide:</b> The process of breaking a problem into sub 
          <br/> 
          <tab>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </tab>
            problems
          <br/>
          <br/>
          <b>Conquer:</b> Solve sub-problems by calling recursively 
           <br/>
           <tab>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </tab>
           until solved
           <br/>
          <br/>
           <b>Combine:</b> Combine the sub-problems to get the final 
           <br/>
           <tab>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </tab>
           result of the whole problem
          
           
          </h4>
      </div>
    
    <div style={{position: 'relative',
        top: '-976px', left:'1180px'}}>
      <h4> <b>Search:</b> Going through every element of the list 
      <br/>
      <tab>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </tab>one by one
            <br/>
            <br/>
            <b>Check:</b> Validate if the element of the list matches 
            <br/>
            <tab>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </tab>
            the desired condition
     </h4>
    </div>

    <div style={{position: 'relative',
        top: '-700px'
    }}>
        <h3 > Common Examples of 
          <br/>
          Algorithms</h3>
      </div>

      <div > 
        <img src={linearsearch} alt="linearsearch" class="linearsearch"></img>
        <div class="linearsearchborder"/>
      </div>

        <div > 
        <img src={mergesort} alt="mergesort" class="mergesort"></img>
        <div class="mergesortborder"/>
      </div>  

      <div>
        <h4
        style={{position: 'relative',
        top: '-3300px', left: '330px', fontSize:'22pt'
    }}
        >Merge sort</h4>
        </div>

        <div>
        <h4
        style={{position: 'relative',
        top: '-3373px', left: '1350px', fontSize:'22pt'
    }}
        >Selection sort</h4>
        </div>

      <div style={{position: 'relative',
        top: '-3030px', left: '215px', fontSize: '15pt', fontFamily:'Arial' }}>
        <ul>
  <li>Uses <b>Divide & Conquerer</b> algorithm method to sort 
    <br/>
    from least to greatest</li>
  <li><b>Time Complexity:</b> O(logn)</li>
</ul>
      </div>

      <div style={{position: 'relative',
        top: '-3119px', left: '1180px', fontSize: '15pt', fontFamily:'Arial' }}>
        <ul>
  <li>Uses <b>LinearSearch</b> algorithm to method sort 
    <br/>
    from least to greatest</li>
  <li><b>Time Complexity:</b> O(n^2)</li>
</ul>
      </div>
    
    <div style={{position:'relative', top:'-2850px'
  }}><h3>Enhanced Examples of 
    <br/>
    Algorithms</h3></div>

    <div style={{position:'relative', top: '-3100px', left:'295px'}}>

<h4 style={{fontSize: '20pt'}}>D&C Prime Generator</h4>
    </div>

    <div style={{position:'relative', top: '-3166px', left:'1320px'}}>

<h4 style={{fontSize: '20pt'}}>LS Prime Generator</h4>
    </div>
    <div style={{
      position:'relative',
      bottom:'3180px', left:'220px'
    }}>
    <video src={lognprimegen} width="400" height="300" controls="controls" type="video/mp4"></video>
    </div>

    <div style={{
      position:'relative',
      bottom:'3481px', left:'1220px'
    }}>
    <video src={nprimegen} width="400px" height="300px" controls="controls" autoplay="true" />
    </div>

    <div style={{position: 'relative',
        top: '-3490px', left: '1200px', fontSize: '15pt', fontFamily:'Arial' }}>
      
    
    <ul>
  <li>Uses <b>Linear Search</b> algorithm to find the prime 
  <br/>
  number in each index of the array 
    </li>
    <br/>
  <li>Takes longer than <b>D&C</b> since O(n) 
  <br/>
  has a greater growth rate is higher than O(logn)</li>
</ul>
</div>

<div style={{position: 'relative',
        top: '-3630px', left: '200px', fontSize: '15pt', fontFamily:'Arial' }}>
     
    
    <ul>
  <li>Uses <b>Divide & Conquer</b> algorithm to find 
  <br/>
  the prime number by breaking down the array 
  <br/>
  into 1 index array and checking the prime in 
  <br/>
  each array
    </li>
    <br/>
  <li>Takes less than <b>LS</b> since O(logn) has a 
  <br/>
  greater growth rate is less than O(n)</li>
</ul>
</div>


<div style={{position:'relative', bottom:'3440px', textAlign:'center', fontSize:'22pt', fontFamily:'arial',  color:'#54524f'}}>
<div style={{position:'relative', bottom:'440px'}}>
  <h2 style={{position:'relative',  top:'510px'}}>Sources</h2>
  <h3 style={{position:'relative',  top:'580px', left:'450px'}}> Prime Generator Code</h3>
  <a href={nprimecode}>

 <img src={codelogo} alt="linkedin" style={{position:'relative',  color:'#54524f', scale:'40%', top:'500px', left: '560px'}} />
 <p style={{position:'relative',  color:'#54524f', top:'400px', left:'560px'}}>O(n)</p>
 </a>
 <a href={lognprimecode}>

 <img src={codelogo} alt="linkedin" style={{position:'relative',  color:'#54524f', scale:'40%', top:'175px', left: '340px'}} />
 <p style={{position:'relative',  color:'#54524f', top:'75px', left:'340px'}}>O(logn)</p>
 </a>
    <h3 style={{position:'relative',  top:'-145px'}}>Contact</h3>
    <a href='https://www.linkedin.com/in/mohammed-rashid-334668255/'>

 <img src={linkedin} alt="linkedin" style={{position:'relative',  color:'#54524f', scale:'40%', top:'-215px', left:'40px'}} />
 </a>

 <a href='https://www.linkedin.com/in/moealimour/'>
    
 <img src={linkedin} alt="linkedin" style={{position:'relative',  color:'#54524f', scale:'40%', top:'-215px', right:'40px'}} />
 </a>
  
  
 <h3 style={{position:'relative', right:'520px', top:'-483px'}}>To Learn More About Time Complexity</h3>
 <a href='https://www.programiz.com/dsa/divide-and-conquer'>

 <img src={Myproject} alt="programiz" style={{position:'relative', right:'740px', color:'#54524f', scale:'40%', top:'-640px'}} />
 </a>

 <a href='https://www.geeksforgeeks.org/linear-search/'>

 <img src={G4G} alt="Geeksforgeeks" style={{position:'relative', right:'685px', color:'#54524f', scale:'7%', bottom:'1490px'}} />
 </a>
 <a href='https://www.bigocheatsheet.com/'>

 <img src={TC} alt="bigOcheatsheet" style={{position:'relative', right:'565px', color:'#54524f', scale:'20%', bottom:'2440px'}} />
 </a>
 </div>
</div>


</container>
    </body>
  );
}

export default App;
