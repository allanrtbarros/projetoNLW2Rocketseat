const Database = require('./db')   
const createProffy = require('./createProffy')


Database.then(async (db) => {
      //inserir dados
      proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "111111111",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atraves de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões"

    }

    classValue = {
        subject: "Química" ,
        cost: "20" 
        // o proffy_id virá no banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados apos cadastrar a class
        {
        weekday: 1,
        time_from: 720,
        time_to: 1220
        },

        {
        weekday: 0,
        time_from: 520,
        time_to: 1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    console.log(selectedClassesAndProffys)

})