//Array com horários disponíveis
var horariosDisponiveis = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"
"12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", 
"16:30", "17:00", "17:30", "18:00", "18:30"]

// Preenche o select com os horários disponíveis
var selectHorario = document.getElementById("horario")
for (var i = 0; i < horariosDisponiveis.length; i++) {
    var option = document.createElement("option")
    option.value = horariosDisponiveis[i]
    option.text = horariosDisponiveis{i}
    selectHorario.add(option)
}

// Remove horário selecionado do array
document.querySelector('#horario').addEventListener("change", function)
{
    var option = this.options[selectedIndex]
    var horarioSelecionado = option.value
    var index = horariosDisponiveis.indexof(horarioSelecionado)
}