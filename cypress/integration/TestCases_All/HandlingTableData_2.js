describe('Cypress Pagination Test and table data handing', function () {

    it('Pagination Cypress Test', function () {
        cy.visit('https://examples.bootstrap-table.com/template.html?v=134&url=options%2Ftable-pagination.html')
        //cy.wait(2000)
        const pageFetch = (pageIndex, length) => {
            if (pageIndex == length) {
                return;
            }
            return cy.get("li > .page-link").eq(pageIndex)
                .click({ force: true })//.wait(1000) //clicks on page index
                .then(() => {
                    return getRowLength().then((rowLength) => {
                        return rowFetch(0, rowLength, pageIndex, length);
                    });
                });
        };
        const rowFetch = (rowIndex, length, pageIndex, pageLength) => {
            if (rowIndex == length) {
                return pageFetch(++pageIndex, pageLength);
            }
            return cy.get("tr > td").eq(rowIndex).then(($itemPriceList) => {
                const ItemPrice = $itemPriceList.text();
                cy.wait(500)


                if (ItemPrice == "$12") {
                    //Enters the condition if the Item text Found
                    cy.log("Yes! is found");

                    cy.get('tr > td').eq(rowIndex)     //gets the columns with index
                        .then(function (pricelist) {    //stores text found in pricelist
                            const Price = pricelist.text();
                            expect(Price).to.contains('$12'); //Assert text found
                        })

                    //Do something if found in the page…….

                    return new Cypress.Promise((resolve) => {
                        resolve("Success");
                    });
                }
                return rowFetch(++rowIndex, length, pageIndex, pageLength);
            });
        };
        const getRowLength = () => {
            return cy.get("td:nth-child(1)").then(($list) => {
                return new Cypress.Promise((resolve) => {
                    resolve($list.length);
                });
            });
        };

        //For Each Pagination - Searching the Price first - Such that pulling the no.of pages into list $pagelist
        cy.get("li > .page-link").then(($pagelist) => {
            return pageFetch(0, $pagelist.length);
        })

    })

    it("Text check table element", () => {

        cy.visit("https://www.seleniumeasy.com/test/table-search-filter-demo.html")
        cy.get("tr td:nth-child(2)")
            .each(($e1, index, $list) => {      //iterating through the array of elements
                const text = $e1.text();         //storing the iterated element in the text
                if (text.includes("Wireframes")) {     //If the text found,iteration stops
                    cy.get("td:nth-child(2)")          //gets the CSS of the second column
                        .eq(index)                      //grabs the content in the index value
                        .then((Taskcolumn) => {
                            const Tasktext = Taskcolumn.text();
                            expect(Tasktext).to.equal("Wireframes");  //assertion to verify text
                            // Do something with this specific element...
                        })
                }
            })
    })

    it("next() table element", () => {

        cy.visit("https://www.seleniumeasy.com/test/table-search-filter-demo.html")
        cy.get("tr td:nth-child(2)")
            .each(($e1, index, $list) => {        //iterating through the array of elements
                const text = $e1.text();            //storing the iterated element in the text
                if (text.includes("Wireframes")) {   //If the text found, iteration stops
                    cy.get('tr td:nth-child(2)')
                        .eq(index)                          //grabs the content in the index value
                        .next()                    //using the next() to capture the sibling element
                        .then(function (Assigneecolumn) {
                            const Assigneetext = Assigneecolumn.text();
                            expect(Assigneetext).to.contains('John Smith');    //verify the text
                            // Do something with this specific element...
                        })
                }
            })
    })

})
