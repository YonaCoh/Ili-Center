const DOM = {
    traineeBtn: null,
    categoryBtn: null,
    gradeBtn: null,
    bbqBtn: null
};

let state = [];
let questions = [];


let isTrainee = false;
let isCategory = false;
let isGrade = false;
let isChart = false;
let isBBQ = false;


let chosenTrainee;
let chosenCategory;
let chosenGrade = 5;
let myChart;
let traineeIndex;

let initialData;//Initial data to get the rest of the parameters from
let grades;
let labels; //X axis
let label = ""; //Title
let relevantData;


let avgTrainee;
let avgCategory;
let avgStudio;

function init() {

    if (localStorage.getItem('data')) {
        let tempState = JSON.parse(window.localStorage.getItem('data'));
        state = Object.values(tempState)
    }
    if (localStorage.getItem('questions')) {
        let tempState = JSON.parse(window.localStorage.getItem('questions'));
        questions = Object.values(tempState)
    }
    initialData = state;

    avgStudio = state.map(elem => {
        let array = Object.values(elem.category);
        return parseFloat((array.reduce((a, b) => a + b, 0) / array.length)); //Average of each trainee
    })

    avgStudio = (avgStudio.reduce((a, b) => a + b, 0) / avgStudio.length).toFixed(2);
    document.getElementById('avgStudio').innerHTML = `ממוצע הסטודיו: ${avgStudio}`;


    DOM.categoryBtn = $('#is-category');
    DOM.traineeBtn = $('#is-trainee');
    DOM.gradeBtn = $('#is-grade');
    DOM.bbqBtn = $('#is-bbq');


    DOM.categoryBtn.on('click', toggleCategory);
    DOM.traineeBtn.on('click', toggleTrainee);
    DOM.gradeBtn.on('click', toggleGrade);
    DOM.bbqBtn.on('click', toggleBBQ);
    $('#submit-btn').on('click', submitBtn);
    $('#grade-option').on('change', gradeOptionChanged);

    document.getElementById('trainee-option').style.display = 'none';
    document.getElementById('category-option').style.display = 'none';
    document.getElementById('grade-option').style.display = 'none';
    document.getElementById('range-output').style.display = 'none';

    setOptions();
    setOptionsCategories();
}


function setOptions() {
    const selectTrainees = document.querySelector("#trainee-option");
    selectTrainees.innerHTML = ""

    const trainees = []
    for (element of initialData) {
        const curTrainee = document.createElement('option');
        curTrainee.id = element['name'];
        curTrainee.value = element['name'];
        curTrainee.innerText = element['name'];
        trainees.push(curTrainee)
    }
    selectTrainees.append(...trainees)
}

function setOptionsCategories() {
    if (!state[0]) {
        return
    }
    const selectCategories = document.querySelector("#category-option");
    selectCategories.innerHTML = ""
    const categoriesNames = Object.keys(initialData[0]["category"]);
    const categories = categoriesNames.map(category => {
        const curCategory = document.createElement('option');
        curCategory.id = category
        curCategory.value = category
        curCategory.innerText = category
        return curCategory
    })
    selectCategories.append(...categories)
}

init()

function submitBtn() {

    label = ""

    document.getElementById('avgCategory').innerHTML = ""
    document.getElementById('avgTrainee').innerHTML = ""


    document.getElementById('myChart').innerHTML = ""
    let finalResult = "";

    if (isCategory && isTrainee && isGrade) {
        alert("אפשר לפלטר לפי 2 קריטריונים מאמי, את כל ה3 בחרת!")
        return
    } else if ((!isCategory && !isTrainee && !isGrade) || (isGrade && !isCategory && !isTrainee)) {
        alert("קטגוריות לא חוקיות")
        return
    }

    if (isTrainee) {

        chosenTrainee = $("#trainee-option").val();
        finalResult += chosenTrainee;
        relevantData = initialData.filter(elem => elem.name === chosenTrainee);
        if (!isCategory) {
            grades = relevantData.map(elem => Object.values(elem.category))[0];
            label = finalResult;
            labels = relevantData.map(elem => Object.keys(elem.category))[0];

            avgTrainee = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2)

            document.getElementById('avgTrainee').innerHTML = `ממוצע המתאמן.ת ${chosenTrainee}: ${avgTrainee}`;
        }
    }

    if (isCategory) {
        chosenCategory = $("#category-option").val();
        finalResult += chosenCategory;

        label = finalResult;

        if (!isTrainee) {

            labels = initialData.map(elem => elem.name);
            grades = initialData.map(elem => elem.category[chosenCategory]);


            //Make labels + grades an Object
            relevantData = grades.reduce(function (result, grade, index) {
                result[labels[index]] = grade;
                return result;
            }, {})

            if (isBBQ) {
                for (elem in relevantData) {
                    if (relevantData[elem] > 6) {
                        delete relevantData[elem];
                    }
                }
                grades = Object.values(relevantData)
                labels = Object.keys(relevantData)

            }
            avgCategory = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2)
        }
        document.getElementById('avgCategory').innerHTML = `ממוצע הקטגוריה ${chosenCategory} הוא: ${avgCategory}`;
    }
    if (isGrade) {
        if (isTrainee) {
            relevantData = Object.values(relevantData[0].category);

            console.log(relevantData);
        }


        for (elem in relevantData) {
            if (relevantData[elem] > chosenGrade) {
                delete relevantData[elem];
            }
        }

        grades = Object.values(relevantData)
        if (isCategory) {
            labels = Object.keys(relevantData)
        }

    }

    if (isTrainee && isCategory) {
        avgCategory = relevantData[0].category[chosenCategory];
        relevantData = (relevantData[0].questions).filter(elem => elem.category === chosenCategory);
        labels = relevantData.map(elem => elem.id).map(elem => parseInt(elem) + 1);
        grades = relevantData.map(elem => elem.grade);
        document.getElementById('avgCategory').innerHTML = `ציון הקטגוריה ${chosenCategory} של ${chosenTrainee} הוא: ${avgCategory}`;
    }

    drawGraph();
}


function toggleTrainee() {
    setOptionsCategories()
    $(this).toggleClass('active');
    isTrainee = !isTrainee;
    if (isTrainee) {
        DOM.traineeBtn.html('נבחר');
        document.getElementById(`${document.getElementById("is-trainee").id.substring(3)}-option`).style.display = 'block';
    } else {
        DOM.traineeBtn.html('לחץ.י כאן כדי לבחור');
        document.getElementById(`${document.getElementById("is-trainee").id.substring(3)}-option`).style.display = 'none';
    }
}

function toggleCategory() {
    isCategory = !isCategory;
    $(this).toggleClass('active');
    if (isCategory) {
        DOM.categoryBtn.html('נבחר');
        document.getElementById('category-option').style.display = 'block';
    } else {
        DOM.categoryBtn.html('לחץ.י כאן כדי לבחור');
        document.getElementById('category-option').style.display = 'none';
    }
}

function gradeOptionChanged() {
    chosenGrade = document.getElementById('range-output').value;
    console.log(chosenGrade)
}

function toggleGrade() {
    $(this).toggleClass('active');
    isGrade = !isGrade;
    if (isGrade) {
        DOM.gradeBtn.addClass("pressed")
        DOM.gradeBtn.html('נבחר');
        document.getElementById('grade-option').style.display = 'block';
        document.getElementById('range-output').style.display = 'block';
    } else {
        DOM.gradeBtn.removeClass("pressed")
        DOM.gradeBtn.html('לחץ.י כאן כדי לבחור');
        document.getElementById('grade-option').style.display = 'none';
        document.getElementById('range-output').style.display = 'none';
    }
}

function toggleBBQ() {
    $(this).toggleClass('active');
    isBBQ = !isBBQ;
    if (isBBQ) {
        DOM.bbqBtn.html('BBQ נבחר');
        if (isBBQ) {
            initialData = state.filter(elem => elem.isBBQ);
        }
    } else {
        DOM.bbqBtn.html('לא נבחר BBQ');
        initialData = state;
    }
    setOptions()
}

// *** not finished
function drawGraph() {



    const ctx = document.querySelector('#myChart').getContext('2d')

    if (isChart) { //destroy
        myChart.destroy();
    }

    const backgroundColors = [];
    for (grade of grades) {
        switch (parseInt(grade)) {
            case 1:
                backgroundColors.push('rgb(223, 8, 8)')
                break;
            case 2:
                backgroundColors.push('rgb(223, 69, 8)')
                break;
            case 3:
                backgroundColors.push('rgb(223, 112, 8)')
                break;
            case 4:
                backgroundColors.push('rgb(223, 209, 8)')
                break;
            case 5:
                backgroundColors.push('rgb(233, 236, 4)')
                break;
            case 6:
                backgroundColors.push('rgb(201, 236, 4)')
                break;
            case 7:
                backgroundColors.push('rgb(147, 236, 4)')
                break;
            case 8:
                backgroundColors.push('rgb(116, 236, 4)')
                break;
            case 9:
                backgroundColors.push('rgb(77, 236, 4)')
                break;
            default:
                backgroundColors.push('rgb(4, 236, 23)')
        }
    }


    const data = {
        labels: labels,
        datasets: [{
            label: `${label}`,
            data: grades, //Data (grades)
            backgroundColor: backgroundColors,
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000',
            borderRadius: 6

        }],
    }
    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {

                y: {
                    max: 10,
                    min: 0,
                    borderWidth: 10,
                    weight: 100,
                    ticks: {
                        font: {
                            size: 20
                        },
                        stepSize: 1,
                    },
                },
                x: {
                    ticks: {
                        font: {
                            size: 20
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 30
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = `${context.dataset.label} : ${context.formattedValue}`;
                            let index = context.dataIndex;
                            if (isTrainee && isCategory) {
                                label = questions.filter(question => question.category === chosenCategory);
                                label = label.map(elem => elem.question);
                                label = `${label[index]} : ${context.formattedValue}`
                            }
                            return label;
                        }
                    }
                }
            }
        }
    }
    myChart = new Chart(ctx, config);

    isChart = true;
}



// if (isTrainee) {


//     relevantData = initialData.filter(trainee => trainee.name === chosenTrainee);
//     labels = Object.keys(relevantData[0].category);
//     relevantData = Object.values(relevantData[0].category);
//     label = chosenTrainee;
//     avgTrainee = (relevantData.reduce((a, b) => a + b, 0) / relevantData.length).toFixed(2)
//     document.getElementById('avgTrainee').innerHTML = `ממוצע המתאמן.ת ${chosenTrainee}: ${avgTrainee}`;
// }
// if (isCategory) {
//     chosenCategory = $("#category-option").val();
//     finalResult += chosenCategory;

//
//     relevantData = initialData.map(elem => elem.category[chosenCategory]) //Grade of each trainee of a certain category
//

//     avgCategory = (relevantData.reduce((a, b) => a + b, 0) / relevantData.length).toFixed(2)
//     document.getElementById('avgCategory').innerHTML = `ממוצע הקטגוריה ${chosenCategory} הוא: ${avgCategory}`;

//     if (isBBQ) {
//         for (index in relevantData) {
//             if (initialData[grade] > 6) {
//                 relevantData.splice(relevantData[index])
//                 // initialData.splice[]
//             }
//         }
//     }

//     label += chosenCategory;


//     labels = initialData.map(trainee => trainee.name); //Array of names
// }
// if (isTrainee && isCategory) {
//     relevantData = initialData.filter(trainee => trainee.name === chosenTrainee);
//     relevantData = (relevantData[0].questions).filter(elem => elem.category === chosenCategory);
//     labels = relevantData.map(elem => elem.id).map(elem => parseInt(elem) + 1);
//     relevantData = relevantData.map(elem => elem.grade);
//     if (parseInt(avgCategory) >= 6) {
//         // relevantData = [];
//     }
// }

// if (isGrade) {
//     relevantData = relevantData.filter(elem => elem <= parseInt(chosenGrade));

//     // Filtered by category
//     if (isCategory) {
//         labels = initialData.filter(elem => {
//             if (elem.category[chosenCategory] <= parseInt(chosenGrade)) {
//                 return elem.name
//             }
//         }).map(elem => elem.name)
//     }
// }
