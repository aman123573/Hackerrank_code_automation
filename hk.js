const puppeteer = require('puppeteer');

const asnwerObj = require('./code')

const loginLink = 'https://hackerrank.com/auth/login';
require('dotenv').config();
const email = process.env.EMAIL
const password = process.env.PASSWORD;





(async function () {
    try {
        let browserOpenInstance = await puppeteer.launch({
            headless: false,

            args: ['--start-maximized'],

            defaultViewport: null
        })

        let newTab = await browserOpenInstance.newPage()
        await newTab.goto(loginLink)
        await newTab.type("input[placeholder='Your username or email']", email, { delay: 50 })
        await newTab.type("input[placeholder='Your password']", password, { visible: true })
        await newTab.click("button[type='button']", { delay: 50 })
        await waitAndClick('a[data-attr1 = "algorithms"]', newTab)
        await waitAndClick('input[value = "warmup"]', newTab)
        let allChallenges = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', { delay: 50 })
        // console.log(allChallenges.length)
        await questionSolver(newTab, allChallenges[0], asnwerObj.answers[0]);


    } catch (error) {
        console.log(error)
    }


})()


async function waitAndClick(selector, cPage) {
    await cPage.waitForSelector(selector)

    let pageClicked = cPage.click(selector)
    return pageClicked

}

async function questionSolver(page, question, answer) {

    await question.click();
    await waitAndClick('.view-lines.monaco-mouse-cursor-text', page);
    await waitAndClick('.checkbox-input', page)
    await page.type('textarea.custominput', answer, { delay: 10 })
    await page.keyboard.down('Control')
    await page.keyboard.press('A', { dealay: 100 })
    await page.keyboard.press('X', { delay: 100 })
    await page.keyboard.up('Control')
    await waitAndClick('.view-lines.monaco-mouse-cursor-text', page)
    await page.keyboard.down('Control')
    await page.keyboard.press('A', { dealay: 100 })
    await page.keyboard.press('V', { dealay: 100 })
    await page.keyboard.up('Control')
    await waitAndClick('button.ui-btn.ui-btn-normal.ui-btn-secondary.pull-right.msR.hr-monaco-compile.hr-monaco__run-code.ui-btn-styled', page)

}


/*browserOpenPromise
//     .then(function (browser) {
//         let pageArrPromise = browser.newPage()
//         return pageArrPromise;
//     }).then(function (newTab) {
//         page = newTab
//         let hackerrankkOpenPromise = page.goto(loginLink)
//         return hackerrankkOpenPromise;
//     }).then(function () {
        //waiting for the element to appear on the page
//         let elementWaitPromise = page.waitForSelector("input[placeholder='Your username or email']", { visible: true })
//         return elementWaitPromise;
//     })
//     .then(function () {
//         let emailIsEnteredPromise = page.type()
//         return emailIsEnteredPromise;
//     }).then(function () {
        //waiting for the element to appear on the page
//         let elementWaitPromise = page.waitForSelector()
//         return elementWaitPromise;
//     })
//     .then(function () {
//         let passEnteredPromise = page.type("input[placeholder='Your password']", password, { delay: 50 })
//         return passEnteredPromise;
//     }).then(function () {
//         let buttonPressedPromise = page.click()
//         return buttonPressedPromise
//     }).then(function () {
//         let clickAlgoPromise = waitAndClick('', page)
//         return clickAlgoPromise
//     }).then(function () {
//         let warmupClickPromise = waitAndClick()
//         return warmupClickPromise;
       //next chainig is done to wait for some seconds to load the questions
//     }).then(function () {
//         return new Promise(resolve => setTimeout(resolve, 3000))
//     }).then(function () {
//         let allChallengesPromise = page.$$()
//         return allChallengesPromise
//     }).then(function (questionsArr) {
//         console.log("number of questions ", questionsArr.length);
//         let questionWillBeSolved = questionSolver(page, questionsArr[0], asnwerObj.answers[0]);
//         return questionWillBeSolved;
//     })
//     .catch(function (err) {
//         console.log(err)
//     })





// function questionSolver(page, question, answer) {
//     let questionWillBeClicked = question.click()
//     questionWillBeClicked.then(function () {
//         let EditorCursorPromise = waitAndClick(, page);
//         return EditorCursorPromise;
//     }).then(function () {
//         return waitAndClick()
//     }).then(function () {
//         return page.waitForSelector('textarea.custominput')
//     }).then(function () {
//         return page.type()
//     }).then(function () {
//         let ctrlIsPressed = page.keyboard.down('Control');
//         return ctrlIsPressed;
//     }).then(function () {
//         let AisPressed = page.keyboard.press('A', { delay: 100 });
//         return AisPressed;
//     }).then(function () {
//         let XisPressed = page.keyboard.press('X', { delay: 100 })
//         return XisPressed
//     }).then(function () {
//         let ctrlIsUnPressed = page.keyboard.up('Control');
//         return ctrlIsUnPressed;
//     }).then(function () {
//         let editorInFocus = waitAndClick()
//         return editorInFocus
//     }).then(function () {
//         let ctrlisPressed = page.keyboard.down('Control');
//         return ctrlisPressed;
//     }).then(function () {
//         let AisPressed = page.keyboard.press('A', { delay: 100 });
//         return AisPressed;
//     }).then(function () {
//         let VisPressed = page.keyboard.press('V', { delay: 100 });
//         return VisPressed;
//     }).then(function () {
//         let ctrlIsUnPressed = page.keyboard.up('Control');
//         return ctrlIsUnPressed;
//     })
//         .then(function () {
//             let runBtnClicked = waitAndClick();
//             return runBtnClicked
//         })
// } */