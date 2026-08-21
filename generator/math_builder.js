// generator/math_builder.js
// Generates 45 completely unique, mathematically accurate ACT Math questions per test (Q51-Q95)

function buildOptions(correctAnswer, rawDistractors, seed) {
    const cStr = String(correctAnswer).trim();
    const unique = [cStr];
    
    for (const d of rawDistractors) {
        const dStr = String(d).trim();
        if (dStr !== cStr && !unique.includes(dStr) && unique.length < 4) {
            unique.push(dStr);
        }
    }
    
    let counter = 1;
    while (unique.length < 4) {
        // Generate distinct numeric or formatted fallback
        const numMatch = cStr.match(/^(\$?)(\d+(?:\.\d+)?)(.*)$/);
        let fallback = "";
        if (numMatch) {
            const prefix = numMatch[1];
            const num = parseFloat(numMatch[2]);
            const suffix = numMatch[3];
            const isFloat = numMatch[2].includes('.');
            const newNum = isFloat ? (num + counter * 1.5).toFixed(2) : (num + counter * 3);
            fallback = `${prefix}${newNum}${suffix}`;
        } else {
            fallback = `${cStr} + ${counter}`;
        }
        if (!unique.includes(fallback)) {
            unique.push(fallback);
        }
        counter++;
    }

    const distList = unique.slice(1, 4);
    const ansIdx = Math.abs(seed) % 4;
    distList.splice(ansIdx, 0, cStr);
    return { options: distList, answer: ansIdx };
}

function generateMathQuestions(testIndex) {
    const questions = [];
    const seed = testIndex * 73 + 29;

    const gcd = (a, b) => b === 0 ? Math.abs(a) : gcd(b, a % b);

    // Q51: Pre-Algebra - Unit price discount
    {
        const price = (3.15 + testIndex * 0.45).toFixed(2);
        const qty = 16 + testIndex * 4;
        const disc = 8 + testIndex;
        const totalRaw = (price * qty);
        const finalVal = (totalRaw * (1 - disc / 100)).toFixed(2);
        const ans = `$${finalVal}`;
        const rawDist = [`$${totalRaw.toFixed(2)}`, `$${(totalRaw * 0.85).toFixed(2)}`, `$${(totalRaw * 1.10).toFixed(2)}`];
        const optData = buildOptions(ans, rawDist, seed + 1);
        questions.push({
            id: 51, section: "math", topic: "Pre-Algebra",
            text: `A science laboratory orders ${qty} precision micropipette tips priced at $${price} per pack. If the supplier provides an educational discount of ${disc}% on the entire order, what is the net total cost before tax?`,
            options: optData.options, answer: optData.answer,
            explanation: `Total standard price = ${qty} × $${price} = $${totalRaw.toFixed(2)}. Applying ${disc}% discount: $${totalRaw.toFixed(2)} × (1 &minus; ${disc/100}) = $${finalVal}.`
        });
    }

    // Q52: Percentages - Sequential adjustments
    {
        const baseVal = 320 + testIndex * 35;
        const inc = 12 + testIndex;
        const dec = 18 + (testIndex % 3);
        const step1 = baseVal * (1 + inc / 100);
        const finalVal = Math.round(step1 * (1 - dec / 100));
        const ans = `${finalVal}`;
        const rawDist = [`${Math.round(baseVal * 0.75)}`, `${Math.round(step1)}`, `${Math.round(baseVal * 1.25)}`];
        const optData = buildOptions(ans, rawDist, seed + 2);
        questions.push({
            id: 52, section: "math", topic: "Percentages",
            text: `A regional wildlife reserve recorded an initial population of ${baseVal} migratory cranes. In year one, the population expanded by ${inc}%, and in year two, seasonal conditions caused an ${dec}% reduction from the new total. What was the population at the end of year two (rounded to the nearest integer)?`,
            options: optData.options, answer: optData.answer,
            explanation: `Year 1 count: ${baseVal} × (1 + ${inc/100}) = ${step1.toFixed(1)}. Year 2 count: ${step1.toFixed(1)} × (1 &minus; ${dec/100}) = ${finalVal}.`
        });
    }

    // Q53: Elementary Algebra - Distributive linear equation
    {
        const a = 5 + testIndex;
        const b = 2 + (testIndex % 4);
        const c = 28 + testIndex * 3;
        const xVal = ((c / a) + b).toFixed(2);
        const ans = `${xVal}`;
        const rawDist = [`${((c - b) / a).toFixed(2)}`, `${((c / a) - b).toFixed(2)}`, `${(parseFloat(xVal) + 3.2).toFixed(2)}`];
        const optData = buildOptions(ans, rawDist, seed + 3);
        questions.push({
            id: 53, section: "math", topic: "Elementary Algebra",
            text: `Determine the real value of <i>x</i> that satisfies the equation: ${a}(<i>x</i> &minus; ${b}) = ${c}.`,
            options: optData.options, answer: optData.answer,
            explanation: `Divide both sides by ${a}: <i>x</i> &minus; ${b} = ${c}/${a} &rArr; <i>x</i> = ${(c / a).toFixed(2)} + ${b} = ${xVal}.`
        });
    }

    // Q54: Exponents & Radicals - Fractional power evaluation
    {
        const root = testIndex + 2;
        const squareVal = root * root;
        const cubeVal = root * root * root;
        const ans = `${cubeVal}`;
        const rawDist = [`${squareVal * root * root}`, `${root * 3}`, `${squareVal}`];
        const optData = buildOptions(ans, rawDist, seed + 4);
        questions.push({
            id: 54, section: "math", topic: "Exponents & Radicals",
            text: `What is the simplified numerical value of (${squareVal})<sup>3/2</sup>?`,
            options: optData.options, answer: optData.answer,
            explanation: `(${squareVal})<sup>3/2</sup> = (&radic;${squareVal})<sup>3</sup> = (${root})<sup>3</sup> = ${cubeVal}.`
        });
    }

    // Q55: Coordinate Geometry - Line parallel through point
    {
        const m = 3 + testIndex;
        const x1 = testIndex;
        const y1 = 5 + testIndex * 2;
        const cVal = y1 - m * x1;
        const cStr = cVal >= 0 ? `+ ${cVal}` : `&minus; ${Math.abs(cVal)}`;
        const ans = `<i>y</i> = ${m}<i>x</i> ${cStr}`;
        const rawDist = [
            `<i>y</i> = &minus;${m}<i>x</i> ${cStr}`,
            `<i>y</i> = ${m}<i>x</i> + ${y1 + 10}`,
            `<i>y</i> = (1/${m})<i>x</i> + ${x1 + 5}`
        ];
        const optData = buildOptions(ans, rawDist, seed + 5);
        questions.push({
            id: 55, section: "math", topic: "Coordinate Geometry",
            text: `Which equation represents the line in the standard coordinate plane that passes through (${x1}, ${y1}) and runs parallel to <i>y</i> = ${m}<i>x</i> &minus; 15?`,
            options: optData.options, answer: optData.answer,
            explanation: `Parallel lines have identical slope <i>m</i> = ${m}. Using point-slope: <i>y</i> &minus; ${y1} = ${m}(<i>x</i> &minus; ${x1}) &rArr; <i>y</i> = ${m}<i>x</i> ${cStr}.`
        });
    }

    // Q56: Plane Geometry - Supplementary angles
    {
        const givenAngle = 41 + testIndex * 4;
        const supp = 180 - givenAngle;
        const ans = `${supp}&deg;`;
        const rawDist = [`${givenAngle}&deg;`, `${180 - supp + 15}&deg;`, `${supp - 20}&deg;`];
        const optData = buildOptions(ans, rawDist, seed + 6);
        questions.push({
            id: 56, section: "math", topic: "Plane Geometry",
            text: `In a plane geometric construction, ray <i>PT</i> intersects line <i>RS</i> at point <i>P</i>. If &ang;<i>RPT</i> measures ${givenAngle}&deg;, what is the exact measure of adjacent angle &ang;<i>TPS</i>?`,
            options: optData.options, answer: optData.answer,
            explanation: `Adjacent angles forming a linear pair sum to 180&deg;. &ang;<i>TPS</i> = 180&deg; &minus; ${givenAngle}&deg; = ${supp}&deg;.`
        });
    }

    // Q57: Intermediate Algebra - Linear system
    {
        const x = 4 + testIndex;
        const y = 3 + (testIndex % 3);
        const eq1 = x + y;
        const eq2 = 2 * x - y;
        const ans = `<i>x</i> = ${x}, <i>y</i> = ${y}`;
        const rawDist = [
            `<i>x</i> = ${x + 2}, <i>y</i> = ${y - 1}`,
            `<i>x</i> = ${y + 5}, <i>y</i> = ${x - 2}`,
            `<i>x</i> = &minus;${x}, <i>y</i> = ${y}`
        ];
        const optData = buildOptions(ans, rawDist, seed + 7);
        questions.push({
            id: 57, section: "math", topic: "Intermediate Algebra",
            text: `Find the unique solution pair (<i>x</i>, <i>y</i>) that satisfies the system:\n\n<i>x</i> + <i>y</i> = ${eq1}\n2<i>x</i> &minus; <i>y</i> = ${eq2}`,
            options: optData.options, answer: optData.answer,
            explanation: `Adding equations: 3<i>x</i> = ${eq1 + eq2} &rArr; <i>x</i> = ${x}. Then <i>y</i> = ${eq1} &minus; ${x} = ${y}.`
        });
    }

    // Q58: Trigonometry - Cosine ratio
    {
        const adj = 7 + testIndex * 2;
        const hyp = 25 + testIndex * 3;
        const ans = `${adj}/${hyp}`;
        const rawDist = [`${hyp}/${adj}`, `&radic;(${hyp * hyp - adj * adj})/${hyp}`, `1`];
        const optData = buildOptions(ans, rawDist, seed + 8);
        questions.push({
            id: 58, section: "math", topic: "Trigonometry",
            text: `In right triangle &Delta;<i>PQR</i> with &ang;<i>Q</i> = 90&deg;, side <i>PQ</i> has length ${adj} and hypotenuse <i>PR</i> has length ${hyp}. What is the exact value of cos(&ang;<i>P</i>)?`,
            options: optData.options, answer: optData.answer,
            explanation: `cos(&ang;<i>P</i>) = Adjacent / Hypotenuse = <i>PQ</i> / <i>PR</i> = ${adj}/${hyp}.`
        });
    }

    // Q59: Statistics - Median of distinct list
    {
        const base = 18 + testIndex * 7;
        const nums = [base, base + 4, base + 9, base + 16, base + 25, base + 38, base + 51];
        const median = nums[3];
        const ans = `${median}`;
        const rawDist = [`${nums[1]}`, `${nums[5]}`, `${nums[6]}`];
        const optData = buildOptions(ans, rawDist, seed + 9);
        questions.push({
            id: 59, section: "math", topic: "Statistics & Probability",
            text: `What is the median value of the sorted numerical collection: { ${nums.join(", ")} }?`,
            options: optData.options, answer: optData.answer,
            explanation: `For an ordered dataset of 7 elements, the median is the 4th element: ${median}.`
        });
    }

    // Q60: Ratios & Proportions - Alloy mixing
    {
        const cVal = 3 + testIndex;
        const zVal = 4 + testIndex * 2;
        const mult = 12 + testIndex * 3;
        const copperMass = cVal * mult;
        const zincMass = zVal * mult;
        const ans = `${zincMass} kg`;
        const rawDist = [`${zincMass + 14} kg`, `${zincMass - 11} kg`, `${copperMass + 25} kg`];
        const optData = buildOptions(ans, rawDist, seed + 10);
        questions.push({
            id: 60, section: "math", topic: "Ratios & Proportions",
            text: `A metallurgical alloy requires copper and zinc in a mass ratio of ${cVal}:${zVal}. If a foundry batch contains ${copperMass} kg of copper, how many kilograms of zinc must be blended?`,
            options: optData.options, answer: optData.answer,
            explanation: `Ratio: ${cVal}/${zVal} = ${copperMass}/<i>z</i> &rArr; <i>z</i> = (${zVal} × ${copperMass}) / ${cVal} = ${zincMass} kg.`
        });
    }

    // Q61-Q95
    for (let qId = 61; qId <= 95; qId++) {
        const pA = testIndex * 13 + qId;
        const pB = testIndex * 17 + qId * 2;
        const pC = testIndex * 19 + qId * 3;

        let topic = "Intermediate Algebra";
        let qText = "";
        let ans = "";
        let rawDist = [];
        let exp = "";

        switch(qId) {
            case 61:
                topic = "Pre-Algebra";
                qText = `Find the greatest common factor (GCF) of ${pA * 4} and ${pA * 6}.`;
                ans = `${pA * 2}`;
                rawDist = [`${pA}`, `${pA * 4}`, `${pA * 12}`];
                exp = `GCF(${pA * 4}, ${pA * 6}) = ${pA} × GCF(4, 6) = ${pA} × 2 = ${pA * 2}.`;
                break;
            case 62:
                topic = "Elementary Algebra";
                qText = `Solve for <i>x</i> in the equation: 4<i>x</i> &minus; ${pA} = 3<i>x</i> + ${pB}.`;
                ans = `${pA + pB}`;
                rawDist = [`${pB - pA}`, `${pA * 2}`, `${pA + pB + 6}`];
                exp = `4<i>x</i> &minus; 3<i>x</i> = ${pB} + ${pA} &rArr; <i>x</i> = ${pA + pB}.`;
                break;
            case 63:
                topic = "Plane Geometry";
                qText = `A rectangular courtyard has length ${pA + 10} meters and width ${pB + 5} meters. What is its total perimeter?`;
                ans = `${2 * (pA + 10 + pB + 5)} m`;
                rawDist = [`${(pA + 10) * (pB + 5)} m`, `${pA + 10 + pB + 5} m`, `${2 * (pA + 10 + pB + 5) + 12} m`];
                exp = `Perimeter = 2(Length + Width) = 2(${pA + 10} + ${pB + 5}) = ${2 * (pA + 10 + pB + 5)} m.`;
                break;
            case 64:
                topic = "Exponents & Radicals";
                const pPow1 = testIndex + 2;
                const pPow2 = testIndex + 3;
                qText = `Simplify the algebraic expression: (<i>y</i><sup>${pPow1}</sup>)<sup>${pPow2}</sup> &middot; <i>y</i><sup>4</sup>.`;
                const expVal = pPow1 * pPow2 + 4;
                ans = `<i>y</i><sup>${expVal}</sup>`;
                rawDist = [`<i>y</i><sup>${expVal + 3}</sup>`, `<i>y</i><sup>${expVal - 2}</sup>`, `<i>y</i><sup>${expVal * 2}</sup>`];
                exp = `(<i>y</i><sup>${pPow1}</sup>)<sup>${pPow2}</sup> = <i>y</i><sup>${pPow1 * pPow2}</sup>. Multiplying by <i>y</i><sup>4</sup> gives <i>y</i><sup>${expVal}</sup>.`;
                break;
            case 65:
                topic = "Trigonometry";
                const tanNum = testIndex + 1;
                const tanDen = testIndex + 4;
                qText = `In right triangle &Delta;<i>ABC</i>, acute angle &theta; has tan(&theta;) = ${tanNum}/${tanDen}. What is cot(&theta;)?`;
                ans = `${tanDen}/${tanNum}`;
                rawDist = [`${tanNum}/${tanDen}`, `1`, `&minus;${tanDen}/${tanNum}`];
                exp = `cot(&theta;) = 1 / tan(&theta;) = ${tanDen}/${tanNum}.`;
                break;
            case 66:
                topic = "Coordinate Geometry";
                qText = `Determine the midpoint of the line segment joining (${pA}, ${pB}) and (${pA + 8}, ${pB + 12}).`;
                ans = `(${pA + 4}, ${pB + 6})`;
                rawDist = [`(${pA + 8}, ${pB + 12})`, `(${pA + 2}, ${pB + 3})`, `(${pA + 6}, ${pB + 8})`];
                exp = `Midpoint = ((${pA} + ${pA + 8})/2, (${pB} + ${pB + 12})/2) = (${pA + 4}, ${pB + 6}).`;
                break;
            case 67:
                topic = "Intermediate Algebra";
                qText = `If quadratic function <i>h</i>(<i>x</i>) = 3<i>x</i><sup>2</sup> &minus; ${pA}, evaluate <i>h</i>(4).`;
                const hVal = 3 * 16 - pA;
                ans = `${hVal}`;
                rawDist = [`${48 + pA}`, `${24 - pA}`, `${hVal + 11}`];
                exp = `<i>h</i>(4) = 3(4)<sup>2</sup> &minus; ${pA} = 3(16) &minus; ${pA} = 48 &minus; ${pA} = ${hVal}.`;
                break;
            case 68:
                topic = "Statistics & Probability";
                qText = `A lottery drum contains numbered tokens from 1 through ${pA + 20}. If a single token is selected at random, what is the probability that it is divisible by 5?`;
                const countDiv5 = Math.floor((pA + 20) / 5);
                ans = `${countDiv5}/${pA + 20}`;
                rawDist = [`${countDiv5 + 3}/${pA + 20}`, `1/${pA + 20}`, `${countDiv5 - 1}/${pA + 20}`];
                exp = `There are ${countDiv5} multiples of 5 within 1 to ${pA + 20}. Probability = ${countDiv5}/${pA + 20}.`;
                break;
            case 69:
                topic = "Percentages";
                qText = `A laboratory apparatus originally priced at $${pA * 20} is discounted by ${15 + (testIndex % 5)}%. What is the discounted price?`;
                const dPct = 15 + (testIndex % 5);
                const discPrice = (pA * 20 * (1 - dPct / 100)).toFixed(2);
                ans = `$${discPrice}`;
                rawDist = [`$${(pA * 20 * 0.90).toFixed(2)}`, `$${(pA * 20 * 0.65).toFixed(2)}`, `$${(pA * 20).toFixed(2)}`];
                exp = `Discounted price = $${pA * 20} × (1 &minus; ${dPct/100}) = $${discPrice}.`;
                break;
            case 70:
                topic = "Plane Geometry";
                qText = `What is the area of a right triangle with base ${pA * 2} mm and perpendicular height ${pB * 2} mm?`;
                const trArea = (pA * 2 * pB * 2) / 2;
                ans = `${trArea} mm<sup>2</sup>`;
                rawDist = [`${trArea * 2} mm<sup>2</sup>`, `${Math.round(trArea / 2)} mm<sup>2</sup>`, `${(pA * 2 + pB * 2) * 4} mm<sup>2</sup>`];
                exp = `Area = (1/2) × base × height = (1/2) × ${pA * 2} × ${pB * 2} = ${trArea} mm<sup>2</sup>.`;
                break;
            case 71:
                topic = "Intermediate Algebra";
                qText = `Solve the absolute value equation: |3<i>x</i> &minus; ${pA * 3}| = ${pB * 3}.`;
                const x1 = (pA * 3 + pB * 3) / 3;
                const x2 = (pA * 3 - pB * 3) / 3;
                ans = `<i>x</i> = ${x1} or <i>x</i> = ${x2}`;
                rawDist = [`<i>x</i> = ${x1}`, `<i>x</i> = ${x2}`, `<i>x</i> = &minus;${x1} or <i>x</i> = &minus;${x2}`];
                exp = `3<i>x</i> &minus; ${pA * 3} = ${pB * 3} &rArr; <i>x</i> = ${x1}; 3<i>x</i> &minus; ${pA * 3} = &minus;${pB * 3} &rArr; <i>x</i> = ${x2}.`;
                break;
            case 72:
                topic = "Coordinate Geometry";
                qText = `A circle in the standard coordinate plane has equation (<i>x</i> + ${pA})<sup>2</sup> + (<i>y</i> &minus; ${pB})<sup>2</sup> = ${pC * pC}. What is its radius?`;
                ans = `${pC} units`;
                rawDist = [`${pC * pC} units`, `${pA + 3} units`, `${pB + 7} units`];
                exp = `In (<i>x</i> &minus; <i>h</i>)<sup>2</sup> + (<i>y</i> &minus; <i>k</i>)<sup>2</sup> = <i>r</i><sup>2</sup>, the radius <i>r</i> = &radic;(${pC * pC}) = ${pC} units.`;
                break;
            case 73:
                topic = "Trigonometry";
                qText = `Convert the angle ${pA * 15}&deg; into radian measure.`;
                const g3 = gcd(pA * 15, 180);
                const nRad = (pA * 15) / g3;
                const dRad = 180 / g3;
                ans = dRad === 1 ? `${nRad}&pi;` : `${nRad}&pi;/${dRad}`;
                rawDist = [`${nRad}&pi;/${dRad + 2}`, `${dRad}&pi;/${nRad + 1}`, `(${pA * 15}/360)&pi;`];
                exp = `Radians = (Degrees × &pi;) / 180 = (${pA * 15}&pi;) / 180 = ${ans}.`;
                break;
            case 74:
                topic = "Pre-Algebra";
                qText = `An arithmetic sequence has initial term <i>a</i><sub>1</sub> = ${pA} and common difference <i>d</i> = ${testIndex + 3}. What is the 10th term, <i>a</i><sub>10</sub>?`;
                const a10 = pA + 9 * (testIndex + 3);
                ans = `${a10}`;
                rawDist = [`${a10 - 8}`, `${a10 + 12}`, `${pA + 15 * (testIndex + 3)}`];
                exp = `<i>a</i><sub>10</sub> = <i>a</i><sub>1</sub> + (10 &minus; 1)<i>d</i> = ${pA} + 9(${testIndex + 3}) = ${a10}.`;
                break;
            case 75:
                topic = "Elementary Algebra";
                qText = `Factor the quadratic binomial completely: <i>x</i><sup>2</sup> &minus; ${(pA + 5) * (pA + 5)}.`;
                ans = `(<i>x</i> &minus; ${pA + 5})(<i>x</i> + ${pA + 5})`;
                rawDist = [`(<i>x</i> &minus; ${pA + 5})<sup>2</sup>`, `(<i>x</i> + ${pA + 5})<sup>2</sup>`, `(<i>x</i> &minus; ${(pA + 5) * 2})(<i>x</i> + 2)`];
                exp = `Difference of squares: <i>a</i><sup>2</sup> &minus; <i>b</i><sup>2</sup> = (<i>a</i> &minus; <i>b</i>)(<i>a</i> + <i>b</i>).`;
                break;
            case 76:
                topic = "Statistics & Probability";
                const nVal = testIndex + 12;
                const c2 = (nVal * (nVal - 1)) / 2;
                qText = `From a cohort of ${nVal} researchers, how many distinct 2-person subcommittees can be formed?`;
                ans = `${c2}`;
                rawDist = [`${c2 * 2}`, `${nVal * 2}`, `${c2 + 10}`];
                exp = `<i>C</i>(${nVal}, 2) = (${nVal} × ${nVal - 1}) / 2 = ${c2}.`;
                break;
            case 77:
                topic = "Intermediate Algebra";
                const re1 = testIndex + 2;
                const rePart = re1 * 3 + 2;
                const imPart = 6 - re1;
                qText = `Simplify the complex number product: (${re1} + 2<i>i</i>)(3 &minus; <i>i</i>), where <i>i</i><sup>2</sup> = &minus;1.`;
                ans = `${rePart} ${imPart >= 0 ? '+ ' + imPart : '&minus; ' + Math.abs(imPart)}<i>i</i>`;
                rawDist = [`${rePart} &minus; ${imPart + 5}<i>i</i>`, `${rePart + 6} + <i>i</i>`, `${re1 * 3} &minus; 4<i>i</i>`];
                exp = `(${re1} + 2<i>i</i>)(3 &minus; <i>i</i>) = ${re1 * 3} &minus; ${re1}<i>i</i> + 6<i>i</i> &minus; 2<i>i</i><sup>2</sup> = ${rePart} + ${imPart}<i>i</i>.`;
                break;
            case 78:
                topic = "Plane Geometry";
                const rCone = testIndex + 3;
                const hCone = testIndex + 6;
                const coneVol = ((rCone * rCone * hCone) / 3).toFixed(1);
                qText = `A solid geometric cone has a circular base radius of ${rCone} cm and a height of ${hCone} cm. What is its volume?`;
                ans = `${coneVol}&pi; cm<sup>3</sup>`;
                rawDist = [`${(coneVol * 2.5).toFixed(1)}&pi; cm<sup>3</sup>`, `${(coneVol / 2).toFixed(1)}&pi; cm<sup>3</sup>`, `${(rCone * hCone * 2)}&pi; cm<sup>3</sup>`];
                exp = `Volume = (1/3)&pi;<i>r</i><sup>2</sup><i>h</i> = (1/3)&pi;(${rCone})<sup>2</sup>(${hCone}) = ${coneVol}&pi; cm<sup>3</sup>.`;
                break;
            case 79:
                topic = "Ratios & Proportions";
                qText = `If variable <i>u</i> is inversely proportional to <i>v</i>, and <i>u</i> = ${pA * 2} when <i>v</i> = 3, what is <i>u</i> when <i>v</i> = 6?`;
                const kConst = pA * 2 * 3;
                const uNew = kConst / 6;
                ans = `${uNew}`;
                rawDist = [`${uNew * 3}`, `${Math.round(uNew / 2)}`, `${pA * 5}`];
                exp = `Inverse variation: <i>u</i> &middot; <i>v</i> = <i>k</i> &rArr; <i>k</i> = ${pA * 2} × 3 = ${kConst}. When <i>v</i> = 6, <i>u</i> = ${kConst} / 6 = ${uNew}.`;
                break;
            case 80:
                topic = "Coordinate Geometry";
                qText = `What is the <i>x</i>-intercept of the linear equation 5<i>x</i> &minus; 2<i>y</i> = ${pA * 10}?`;
                const xInt = (pA * 10) / 5;
                ans = `(${xInt}, 0)`;
                rawDist = [`(0, ${xInt})`, `(${xInt * 2}, 0)`, `(&minus;${xInt}, 0)`];
                exp = `Set <i>y</i> = 0 &rArr; 5<i>x</i> = ${pA * 10} &rArr; <i>x</i> = ${xInt}. Intercept is (${xInt}, 0).`;
                break;
            case 81:
                topic = "Exponents & Radicals";
                qText = `Simplify the radical product: &radic;(${pA * 3}) &middot; &radic;(${pA * 12}).`;
                const radProd = Math.sqrt(pA * 3 * pA * 12);
                ans = `${radProd}`;
                rawDist = [`${radProd * 2}`, `${pA * 4}`, `${radProd + 15}`];
                exp = `&radic;(${pA * 3} × ${pA * 12}) = &radic;(${pA * pA * 36}) = ${pA} × 6 = ${radProd}.`;
                break;
            case 82:
                topic = "Intermediate Algebra";
                const baseLog = testIndex + 5;
                qText = `Evaluate the logarithmic expression: log<sub>${baseLog}</sub>(${baseLog * baseLog * baseLog}).`;
                ans = `3`;
                rawDist = [`2`, `${baseLog}`, `4`];
                exp = `log<sub>${baseLog}</sub>(${baseLog}<sup>3</sup>) = 3.`;
                break;
            case 83:
                topic = "Plane Geometry";
                qText = `In a circle with radius ${pA + 4} cm, calculate the area of a sector with a central angle of 60&deg;.`;
                const rSec = pA + 4;
                const secAr = (rSec * rSec * (60 / 360)).toFixed(2);
                ans = `${secAr}&pi; cm<sup>2</sup>`;
                rawDist = [`${(secAr * 2.5).toFixed(2)}&pi; cm<sup>2</sup>`, `${(secAr / 2).toFixed(2)}&pi; cm<sup>2</sup>`, `${rSec * 3}&pi; cm<sup>2</sup>`];
                exp = `Sector Area = &pi;<i>r</i><sup>2</sup>(&theta;/360&deg;) = &pi;(${rSec})<sup>2</sup>(60&deg;/360&deg;) = ${secAr}&pi; cm<sup>2</sup>.`;
                break;
            case 84:
                topic = "Elementary Algebra";
                qText = `Solve for <i>w</i> in the rational equation: <i>w</i>/5 + <i>w</i>/2 = ${pA * 7}.`;
                ans = `${10 * pA}`;
                rawDist = [`${7 * pA}`, `${5 * pA}`, `${14 * pA}`];
                exp = `Common denominator: (2<i>w</i> + 5<i>w</i>)/10 = 7<i>w</i>/10 = ${pA * 7} &rArr; <i>w</i> = 10 × ${pA} = ${10 * pA}.`;
                break;
            case 85:
                topic = "Trigonometry";
                qText = `If &theta; is an acute angle in test ${testIndex} with sin(&theta;) = 1/2, what is the value of cos(&theta;)?`;
                ans = `&radic;3/2`;
                rawDist = [`1/2`, `&radic;2/2`, `1`];
                exp = `In a 30&deg;-60&deg;-90&deg; special triangle where sin(30&deg;) = 1/2, cos(30&deg;) = &radic;3/2.`;
                break;
            case 86:
                topic = "Statistics & Probability";
                const rB = testIndex + 3;
                const bB = testIndex + 4;
                const gB = testIndex + 5;
                const totB = rB + bB + gB;
                qText = `A sample container has ${rB} red beads, ${bB} blue beads, and ${gB} green beads. What is the probability of drawing a red bead?`;
                ans = `${rB}/${totB}`;
                rawDist = [`${bB}/${totB}`, `${gB}/${totB}`, `1/${totB}`];
                exp = `Probability = (Red beads) / (Total beads) = ${rB} / (${rB} + ${bB} + ${gB}) = ${rB}/${totB}.`;
                break;
            case 87:
                topic = "Intermediate Algebra";
                const cTerm = testIndex + 4;
                const dVal = 64 - 4 * 2 * cTerm;
                qText = `Determine the discriminant &Delta; for the quadratic equation 2<i>x</i><sup>2</sup> + 8<i>x</i> + ${cTerm} = 0.`;
                ans = `${dVal}`;
                rawDist = [`${dVal + 16}`, `${64 + 8 * cTerm}`, `${dVal - 14}`];
                exp = `Discriminant &Delta; = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> = 8<sup>2</sup> &minus; 4(2)(${cTerm}) = 64 &minus; ${8 * cTerm} = ${dVal}.`;
                break;
            case 88:
                topic = "Coordinate Geometry";
                qText = `Calculate the slope of the line passing through coordinates (4, ${pA}) and (7, ${pA + 15}).`;
                ans = `5`;
                rawDist = [`1/5`, `15`, `3/7`];
                exp = `Slope <i>m</i> = (${pA + 15} &minus; ${pA}) / (7 &minus; 4) = 15/3 = 5.`;
                break;
            case 89:
                topic = "Percentages";
                const pPct = testIndex + 10;
                const pTot = pB * 20;
                const resVal = ((pPct / 100) * pTot).toFixed(1);
                qText = `What is ${pPct}% of ${pTot}?`;
                ans = `${resVal}`;
                rawDist = [`${(parseFloat(resVal) + 12).toFixed(1)}`, `${(parseFloat(resVal) - 8).toFixed(1)}`, `${(pTot * 0.45).toFixed(1)}`];
                exp = `(${pPct}/100) × ${pTot} = ${resVal}.`;
                break;
            case 90:
                topic = "Plane Geometry";
                qText = `The hypotenuse of an isosceles right triangle is ${pA * 4}&radic;2 cm. What is the length of each leg?`;
                ans = `${pA * 4} cm`;
                rawDist = [`${pA * 2} cm`, `${pA * 8} cm`, `${pA * 4 + 6} cm`];
                exp = `In a 45&deg;-45&deg;-90&deg; right triangle, Hypotenuse = Leg &middot; &radic;2 &rArr; Leg = ${pA * 4} cm.`;
                break;
            case 91:
                topic = "Pre-Algebra";
                qText = `Evaluate the arithmetic expression: |&minus;${pA * 4}| &minus; |${pB * 2}| + |&minus;6|.`;
                const res91 = pA * 4 - pB * 2 + 6;
                ans = `${res91}`;
                rawDist = [`${res91 + 14}`, `${res91 - 10}`, `${pA * 4 + pB * 2 + 6}`];
                exp = `${pA * 4} &minus; ${pB * 2} + 6 = ${res91}.`;
                break;
            case 92:
                topic = "Intermediate Algebra";
                const arg = testIndex + 2;
                const gRes = 3 * arg;
                const fRes = 2 * gRes + 5;
                qText = `Given <i>f</i>(<i>x</i>) = 2<i>x</i> + 5 and <i>g</i>(<i>x</i>) = 3<i>x</i>, evaluate the composite function <i>f</i>(<i>g</i>(${arg})).`;
                ans = `${fRes}`;
                rawDist = [`${fRes + 7}`, `${2 * (arg + 5)}`, `${3 * (2 * arg + 5)}`];
                exp = `<i>g</i>(${arg}) = 3(${arg}) = ${gRes}. Then <i>f</i>(${gRes}) = 2(${gRes}) + 5 = ${fRes}.`;
                break;
            case 93:
                topic = "Elementary Algebra";
                qText = `Solve for <i>z</i> in the linear relation: 6<i>z</i> &minus; ${pA * 6} = 0.`;
                ans = `${pA}`;
                rawDist = [`${pA + 4}`, `&minus;${pA}`, `0`];
                exp = `6<i>z</i> = ${pA * 6} &rArr; <i>z</i> = ${pA}.`;
                break;
            case 94:
                topic = "Statistics & Probability";
                qText = `The arithmetic mean of four laboratory measurements is ${pA + 50}. If three of the values are ${pA + 45}, ${pA + 55}, and ${pA + 48}, what is the fourth value?`;
                const targetSum = 4 * (pA + 50);
                const currentSum = (pA + 45) + (pA + 55) + (pA + 48);
                const fourthVal = targetSum - currentSum;
                ans = `${fourthVal}`;
                rawDist = [`${fourthVal + 6}`, `${fourthVal - 8}`, `${pA + 50}`];
                exp = `Total sum required = 4 × (${pA + 50}) = ${targetSum}. Fourth value = ${targetSum} &minus; ${currentSum} = ${fourthVal}.`;
                break;
            case 95:
                topic = "Coordinate Geometry";
                qText = `Which coordinate point lies on the line given by 3<i>x</i> + 2<i>y</i> = ${pA * 3 + 14}?`;
                const ptX = pA;
                const ptY = 7;
                ans = `(${ptX}, ${ptY})`;
                rawDist = [`(${ptX + 2}, ${ptY})`, `(${ptX}, ${ptY + 4})`, `(&minus;${ptX}, ${ptY})`];
                exp = `3(${ptX}) + 2(7) = ${pA * 3} + 14. The point (${ptX}, 7) satisfies the equation.`;
                break;
        }

        const optData = buildOptions(ans, rawDist, seed + qId);

        questions.push({
            id: qId,
            section: "math",
            topic: topic,
            text: qText,
            options: optData.options,
            answer: optData.answer,
            explanation: exp
        });
    }

    return questions;
}

module.exports = { generateMathQuestions };
