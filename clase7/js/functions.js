$(document).ready(function() {
    
    //get
    $('#btn').click(function() {
        $.get("http://localhost:3000/personas",/*funciones,*/ function (data, status) {
            alert("Data: "+ data + "\nStatus: " + status);
            console.log(data);
        });
    });

    //post
    $(".btnPost").click(function () {
        $.post("http://localhost:3000/nuevaPersona",
        {
            nombre: "Matias",
            apellido: "Ramos",
            fecha: "1988-05-16",
            telefono: "6268154754"
        },
        function (data,status) {
            alert("Data: "+ data + "\nStatus: " + status);
            console.log(data);
        }
        );
        
        //img

        $("input").change(function () {
            if (this.files && this.files[0]) {
                var fReader = new FileReader();

                fReader.addEventListener("load", function (e) {
                    console.log(e.target.result);
                    $('#iAvatar').attr("src",e.target.result);
                }

                );
                fReader.readAsDataURL(this.files[0]);
            }
        })
    });

    /*
        $('#input').val(); retorna
        $('#input').val("una variable"); setea

        $('#input').html(); retorna
        $('#input').html("setea"); setea
    */
});