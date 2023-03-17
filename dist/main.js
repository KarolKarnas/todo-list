(()=>{"use strict";const t=class{constructor(t="Deafult Project Title"){this.id=Math.random().toString(16).slice(2),this.name=t,this.todo=[]}},e=class{constructor(t="Default Title",e="Default Description",o="2023-02-03",d="Priority 1",c=!1){this.id=Math.random().toString(16).slice(2),this.title=t,this.description=e,this.dueDate=o,this.priority=d,this.checklist=c}};class o{static getProjects(){let t;return null===localStorage.getItem("projects")?(t=[{id:"bef36e0e1b027",name:"FIX the World2",todo:[{id:"ca079bdcb9ba2",title:"Rebuild Houses",description:"Atque",dueDate:"2023-02-03",priority:"Priority 2",checklist:!0},{id:"ca069bdcb9ba2",title:"Born children",description:"Gitque",dueDate:"2023-02-03",priority:"Priority 2",checklist:!1},{id:"ca059bdcb9ba2",title:"Melt metal scraps",description:"Botu",dueDate:"2023-02-03",priority:"Priority 2",checklist:!1}]},{id:"bod36e0e1b027",name:"Body maintance",todo:[{id:"cfgg9bdcb9ba2",title:"Brush Teeth",description:"Atque",dueDate:"2023-02-03",priority:"Priority 2",checklist:!0}]}],localStorage.setItem("projects",JSON.stringify(t))):t=JSON.parse(localStorage.getItem("projects")),t}static saveProject(t){const e=o.getProjects();e.push(t),localStorage.setItem("projects",JSON.stringify(e))}static saveTodo(t,e){const d=o.getProjects();d[t].todo.push(e),localStorage.setItem("projects",JSON.stringify(d))}static removeTodo(t,e){const d=o.getProjects();d[t].todo.splice(e,1),localStorage.setItem("projects",JSON.stringify(d))}}const d=o;new class{constructor(){this._tracker=new class{constructor(){this._projects=d.getProjects()}addTodoToProject(t,e){this._projects[t].todo.push(e),d.saveTodo(t,e),this._render(t)}addProject(t){this._projects.push(t),d.saveProject(t)}removeTodo(t){let e;this._projects.forEach(((o,c)=>{e=o.todo.findIndex((e=>e.id==t)),-1!==e&&(this._projects[c].todo.splice(e,1),d.removeTodo(c,e))}))}_displayTodo(t,e){const o=document.getElementById("todo-list"),d=document.createElement("li");let c;!0===t.checklist?(d.classList.add("todo-done"),c='<input class="checkbox" type="checkbox" checked />'):c='<input class="checkbox" type="checkbox" />',d.classList.add("todo-single"),d.setAttribute("data-id",t.id),d.innerHTML=`\n\t\t<div class="col-1">\n\t\t${c}\n\t</div>\n\t<div class="col-2">\n\t\t<div class="todo-title">${t.title}</div>\n\t\t<div class="todo-project-name">${this._projects[e].name}</div>\n\t\t<div class="todo-description">\n\t\t${t.description}\n\t\t</div>\n\t\t<div class="todo-priority todo-priority-1">${t.priority}</div>\n\t</div>\n\t<div class="col-3">\n\t\t<input type="date" disabled="true" value="${t.dueDate}" />\n\t\t<div class="todo-icons-container">\n\t\t\t<i class="material-symbols-outlined todo-icon-edit">edit</i>\n\t\t\t<i class="material-symbols-outlined todo-icon-delete">delete</i>\n\t\t</div>\n\t</div>`,o.appendChild(d)}_createExistingProjectsModal(){const t=document.getElementById("selectProject");this._projects.forEach((e=>{let o=document.createElement("option");o.textContent=e.name,o.setAttribute("value",`${e.name}`),o.setAttribute("data-id",`${e.id}`),t.appendChild(o)}))}_clearExistingProjectsModal(){const t=document.getElementById("selectProject");for(;t.firstChild;)t.removeChild(t.firstChild)}_clearMainTodoList(){const t=document.getElementById("todo-list");for(;t.firstChild;)t.removeChild(t.firstChild)}_createProjectsList(){this._projects.forEach(((t,e)=>{const o=document.querySelector("#all-projects"),d=document.createElement("li");d.textContent=t.name,d.classList.add("new-project","li-nav"),d.setAttribute("data-id",t.id),d.setAttribute("data-project-Index",e),o.insertAdjacentElement("afterend",d),d.addEventListener("click",(t=>{this._render(t.target.dataset.projectIndex)}))}))}_clearProjectsList(){document.querySelectorAll(".new-project").forEach((t=>{t.remove()}))}_changeTitle(t){document.getElementById("title").textContent=this._projects[t].name}loadTodos(){this._clearMainTodoList(),document.getElementById("title").textContent="All Todos",this._projects.forEach(((t,e)=>t.todo.forEach((t=>this._displayTodo(t,e)))))}_render(t){this._clearProjectsList(),this._createProjectsList(),this._clearMainTodoList(),this._projects[t].todo.forEach((e=>this._displayTodo(e,t))),this._changeTitle(t),this._clearExistingProjectsModal(),this._createExistingProjectsModal()}},this._loadModal(),this._tracker.loadTodos(),this._tracker._createExistingProjectsModal(),this._tracker._createProjectsList(),document.querySelector("#submit-btn").addEventListener("click",this._newTodo.bind(this)),document.querySelector("#edit-btn").addEventListener("click",this._submitEditTodo.bind(this)),document.getElementById("todo-list").addEventListener("click",this._removeTodo.bind(this)),document.getElementById("todo-list").addEventListener("click",this._editTodo.bind(this)),document.querySelector("#li-all-todo").addEventListener("click",(()=>this._tracker.loadTodos())),document.getElementById("ul-nav").addEventListener("click",this._toggleActiveLi.bind(this)),document.getElementById("todo-list").addEventListener("click",this._setTodoDone.bind(this))}_setTodoDone(t){t.target.classList.contains("checkbox")&&t.target.closest(".todo-single").classList.toggle("todo-done")}_toggleActiveLi(t){t.target.classList.contains("li-nav")&&(document.getElementById("ul-nav").querySelectorAll("li").forEach((t=>t.classList.remove("li-active"))),t.target.classList.add("li-active"))}_loadModal(){const t=document.getElementById("submit-btn");document.querySelectorAll("[data-modal-target]").forEach((e=>{e.addEventListener("click",(o=>{const d=document.querySelector(e.dataset.modalTarget);t.style.display="inherit",this._openModal(d),o.stopPropagation()}))})),document.querySelectorAll("[data-close-button]").forEach((t=>{t.addEventListener("click",(()=>{const e=t.closest(".modal");this._closeModal(e)}))})),document.getElementById("overlay").addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((t=>{this._closeModal(t)}))}));const e=document.querySelectorAll('[name="projectOption"]'),o=document.getElementById("projectNameDiv"),d=document.getElementById("selectProjectDiv");e.forEach((t=>{t.addEventListener("change",(function(){"project-name"===this.value?(o.style.display="block",d.style.display="none"):"selectProject"===this.value&&(o.style.display="none",d.style.display="block")}))}))}_openModal(t){null!=t&&(t.classList.add("active"),overlay.classList.add("active"))}_closeModal(t){const e=document.getElementById("submit-btn"),o=document.getElementById("edit-btn");null!=t&&(e.style.display="none",o.style.display="none",this._clearInputs(),t.classList.remove("active"),overlay.classList.remove("active"))}_clearInputs(){const t=document.getElementById("project-name"),e=document.getElementById("todo-title"),o=document.getElementById("description"),d=document.getElementById("dueDate"),c=document.getElementById("priority");t.value="",e.value="",o.value="",d.value="",c.value="Priority 1"}_newTodo(o){o.preventDefault();const d=document.getElementById("projectNameOption"),c=document.getElementById("selectProjectOption"),i=document.getElementById("selectProject"),s=document.getElementById("project-name"),n=document.getElementById("todo-title"),l=document.getElementById("description"),a=document.getElementById("dueDate"),r=document.getElementById("priority"),m=new e(n.value,l.value,a.value,r.value);if(d.checked){let e=new t(s.value);this._tracker.addProject(e),this._tracker.addTodoToProject(this._tracker._projects.length-1,m)}else c.checked&&this._tracker._projects.forEach(((t,e)=>{t.name===i.value&&this._tracker.addTodoToProject(e,m)}));this._closeModal(modal)}_removeTodo(t){if(t.target.classList.contains("todo-icon-delete")){const e=t.target.closest(".todo-single");this._tracker.removeTodo(e.dataset.id),e.remove()}}_editTodo(t){const e=document.getElementById("edit-btn");if(t.target.classList.contains("todo-icon-edit")){e.style.display="inherit",this._openModal(modal);const o=t.target.closest(".todo-single").dataset.id;let d,c,i,s,n;this._tracker._projects.forEach(((t,e)=>{d=t.todo.findIndex((t=>t.id==o)),-1!==d&&(c=this._tracker._projects[e].todo[d],i=this._tracker._projects[e].name,s=e,n=d)})),modal.setAttribute("data-project-index",s),modal.setAttribute("data-todo-index",n),modal.setAttribute("data-todo-id",o),document.getElementById("projectNameOption"),document.getElementById("selectProjectOption");const l=document.getElementById("selectProject"),a=(document.getElementById("project-name"),document.getElementById("todo-title")),r=document.getElementById("description"),m=document.getElementById("dueDate"),u=document.getElementById("priority");a.value=c.title,r.value=c.description,m.value=c.dueDate,u.value=c.priority,l.value=i}}_submitEditTodo(o){o.preventDefault();const d=document.getElementById("projectNameOption"),c=document.getElementById("selectProjectOption"),i=document.getElementById("selectProject"),s=document.getElementById("project-name"),n=document.getElementById("todo-title"),l=document.getElementById("description"),a=document.getElementById("dueDate"),r=document.getElementById("priority"),m=new e(n.value,l.value,a.value,r.value),u=(modal.dataset.projectIndex,modal.dataset.todoIndex,modal.dataset.todoId);if(d.checked){this._tracker.removeTodo(u);let e=new t(s.value);this._tracker.addProject(e),this._tracker.addTodoToProject(this._tracker._projects.length-1,m)}else c.checked&&this._tracker._projects.forEach(((t,e)=>{t.name===i.value&&(this._tracker.removeTodo(u),this._tracker.addTodoToProject(e,m))}));this._closeModal(modal)}}})();