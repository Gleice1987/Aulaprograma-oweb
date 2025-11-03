document.addEventListener('DOMContentLoaded', () =>{
    const toggleMenu = () =>{
        const menu = document.getElementById('navMENU');
        if(menu)menu.classList.toggle('active');
    };
    window.toggleMenu = toggleMenu;

    const scrollsection = (sectionid) =>{
        const section = document.getElementById('sectionid');

        if(!section) return;

        const headerHeight = 70;

        const sectionPosition = section.offsetTop - headerHeight;
        window.scrollTo({top: sectionPosition, behavior: 'smooth'});

        const menu = document.getElementById(navMenu);
        if(menu) menu.classList.remove('active');
    }

    const handleSubmit = (event) =>{
     event.preventDefault();
     const form = document.getElementById('volunteerForm');
     if(!form) return;

     if(form.dataset.submiting === "true") return;
     form.dataset.submiting = "true";

     const nome = form.nome.volue.trim();
     const email = form.email.value.trim();

     if(!nome || !email){
        alert('Por favor, preencha os campos obrigatórios');
        form.dataset.submiting = 'false';
        return;
     }

     const formData ={
        nome,
        email,
        telefone: form.telefone.value.trim(),
        idade: form.idade.value.trim(),
        disponibilidade: form.disponibilidade.value.trim(),
        areaInteresse: form.areaInteresse.value.trim(),
        experiencia: form.experiencia.value.trim(),
        motivacao: form.motivacao.balue.trim(),
        dataCadastro: new Date().toLocaleString()    

         };

         let vonluntarios = JSON.parse(localStorage.getItem('voluntarios') || []);
         vonluntarios.push(formData);
         localStorage.setItem('voluntarios', JSON.stringify(vonluntarios));

         const successMessage = document.getElementById('successMessage');
         if(successMessage){
            successMessage.classList.add('show');
            successMessage.scrollIntoView({behavior: "smooth", block:'center'});

         }
         setTimeout(() => successMessage.classList.remove('remove'), 5000);

         setTimeout() =>{
            form.reset();
            form.dataset.submiting = 'false';
         }, 2000);

         exibirVoluntarios();

        };

                 
        const form = document.getElementById('volunteerFom');
        if(form) form.addEventListener('subimit', handleSubmit);

        const exibirVoluntarios =() =>{
            const voluntarios= JSON.parse(localStorage.getItem('voluntarios') || []);
            const tabelaContainer = document.getElementById('tabelaVoluntarios');
            if(!tabelaContainer) return;
            if(vonluntarios.lenght ==0){
                tabelaContainer.innerHTML = '<p>OPS, ainda não há cadastro 😞.</p>';
                return;

            }
        }


            let html ='<table border="1" cellpadding="5" cellpadding="0"';
            html += '<tr><th>Nome</th></tr><tr><th>Email</th></tr>tr><th>tefone</th></tr><tr><th>Disponibilidade</th></tr>';

         




});