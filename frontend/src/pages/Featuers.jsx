import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Features() {
    const dispatch=useDispatch();
    const projectItems =useSelector((state)=>state.projects);
    const frontendItems =useSelector((state)=>state.frontend) ; 
    const backendItems =useSelector((state)=>state.backend) ;
    const onClickHandler=(index,type)=>{
        if(type==="frontend"){
            dispatch({type:"frontend/toggleComplete", payload:index});
        }else if(type==="backend"){            
            dispatch({type:"backend/toggleComplete", payload:index});           
        }
        else{
            dispatch({type:"projects/toggleComplete", payload:index});
        }
    
    }
        return (
        <div className="min-h-screen bg-slate-900 text-slate-50 transition-colors">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Featuers and Implemantations</h1>
        <p className="text-center text-sm md:text-base text-slate-300 mb-4">
          This page shows the goals we have completed in the project
          <br /><br />
           The green color represent <span className=" bg-slate-800 border-2 border-slate-700 rounded-xl px-2 py-1 border-l-green-500">Completed</span> 
           <br /> <br />
           The orange color represent <span className=" bg-slate-800 border-2 border-slate-700 rounded-xl px-2 py-1 border-l-orange-500">Pending</span> 
            <br /><br />
            <h1 className="font-bold">
            Click on the card to toggleComplete
            </h1>
        </p>

        <div className="text-center mb-6">
          <div className="px-4 py-2 rounded-xl font-semibold text-orange-500 bg-slate-800  ">
            Project
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {projectItems.map((p, i) => (
            <article
              key={i}
              className={`relative flex-1 min-w-[260px]  sm:max-w-[48%] md:max-w-[23%] bg-slate-800 border border-slate-700 rounded-xl p-5 transform hover:-translate-y-1 transition border-l-5 ${p.completed ? 'border-l-green-500' : 'border-l-orange-500'}    `}
              tabIndex={0}
              aria-labelledby={`proj-${i}`}
              onClick={()=>onClickHandler(i,"project")}
            >
              
              <h3 id={`proj-${i}`} className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-slate-300">{p.desc}</p>
            </article>
          ))}
        </div>

        <section className="mb-8">
        <div className="text-center mb-6">
          <div className="px-4 py-2 rounded-xl font-semibold text-orange-500 bg-slate-800  ">
            FrontEnd
          </div>
        </div>
          <div className="flex flex-wrap gap-4">
            {frontendItems.map((f, i) => (
              <div
                key={i}
                onClick={()=>onClickHandler(i,"frontend")}
                className={`flex-1 min-w-[260px] bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-card hover:shadow-cardHover transition border-l-5 ${f.completed ? 'border-l-green-500' : 'border-l-orange-500'}  `}
              > 
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-300 mb-2">{f.desc}</p>
                {f.list && (
                  <ol className="ml-4 list-disc text-sm text-slate-300">
                    {f.list.map((li, idx) => (
                      <li key={idx} className="mb-1">{li}</li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-6">
          <div className="px-4 py-2 rounded-xl font-semibold text-orange-500 bg-slate-800  ">
            BackEnd
          </div>
        </div>
          <div className="flex flex-wrap gap-4">
            {backendItems.map((b, i) => (
              <div
                key={i}
                onClick={()=>onClickHandler(i,"backend")}
                className={`flex-1 min-w-[260px] bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-card hover:shadow-cardHover transition border-l-5 ${b.completed?'border-l-green-500':'border-l-orange-500'}`}
              >
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-slate-300">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    )
}