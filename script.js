// Importar o supabase (NÃO FUNCIONA SEM type="module" no HTML)
<<<<<<< HEAD
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
=======
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";



>>>>>>> 6e59be8 (Alterações no agendamento e supabase)


// Cofig do nosso Supabase
const SUPABASE_URL = "https://anvutuelnpoidciuazsr.supabase.co"
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFudnV0dWVsbnBvaWRjaXVhenNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2MTEwNTIsImV4cCI6MjA3OTE4NzA1Mn0.r7dgH4HT4fCnli3M8Br0g34-6qZXGkehofDyYKBinKg"

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);


//  Pegando os intes da pagina
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const BtnCadastro = document.getElementById("btnCadastro");

// Mensagens simples ainda falta criar melhor 

const msg = (t) => alert(t);

// ---------------
    // LOGIN
// ---------------


form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let email = emailInput.value.trim();
    let senha = senhaInput.value.trim();

    if (!email || !senha) {
        msg("Preencha e-mail e senha.");
        return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: senha
    });

    if (error) {
        msg("Erro ao fazer login credenciais inválidas! " );
        return;
    }

    msg("Login realizado com sucesso!");
    window.location.href = "agendar.html";  // opcional
});

// -------------------------------
// CADASTRO
// -------------------------------
BtnCadastro.addEventListener("click", async () => {
    let email = emailInput.value.trim();
    let senha = senhaInput.value.trim();

    if (!email || !senha) {
        alert("Digite e-mail e senha para criar uma conta.");
        return;
    }

    const { data, error } = await supabase.auth.signUp({
        email,
        password: senha
    });

    if (error) {
        alert("Erro ao cadastrar, por favor tente novamente!");
        return;
    }

    alert("Cadastro criado com sucesso! Confirme pelo e-mail.");
});

<<<<<<< HEAD
=======

>>>>>>> 6e59be8 (Alterações no agendamento e supabase)
