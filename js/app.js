// START FLOAT ICON AND NAVBAR EFFECT
const floaticon = document.querySelector('.float-icons');
const navbar = document.querySelector('.navbars');
const navitems = document.querySelectorAll('.navs');

const logobar = document.querySelector('.logos');

function navadd(){
    navitems.forEach((navitem)=>{
        navitem.classList.add('active');
    });
}

function navremove(){
    navitems.forEach((navitem)=>{
        navitem.classList.remove('active');
    });
}

window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;
    // console.log(getscrolly);

    if(getscrolly > 350){
        floaticon.style.display='block';
        navbar.classList.add('navbar-dark','fixed-top','active');
        navadd();
       
    }else{
        floaticon.style.display = 'none';
        navbar.classList.remove('navbar-dark','fixed-top','active');
        navremove();
    }

    if(getscrolly > 400){
        logobar.classList.add('active');
    }else{
        logobar.classList.remove('active');
    }  
});

// console.log(window.scrollY); 
// END FLOAT ICON AND NAVBAR EFFECT

//START SLIDER SECION
const slider = document.querySelector('.sliders');
const navbarbtn = document.getElementById('navbar-btn').addEventListener('click',()=>{
    slider.classList.toggle('d-md-block');
});

const closebtn = document.querySelector('.close-btn').addEventListener('click',()=>{
    slider.classList.remove('d-md-block');
});
//END SLIDER SECTION

// START SEARCH 
const search = document.querySelector('.searchs');
const searchicons = document.getElementById('search-icon').addEventListener('click',()=>{
    search.classList.add('active');
});

const closebtnsearch = document.querySelector('.close-btn-search').addEventListener('click',()=>{
    search.classList.remove('active');
});
// END SEARCH 

// START PROJECT SECTION 
// Start Project Nav Section 
const pjlists = document.querySelectorAll('.pjlists');
const fhandwashs = document.querySelectorAll('.filter.handwash');
const fhandwaxs = document.querySelectorAll('.filter.handwax');
const fautowashs = document.querySelectorAll('.filter.autowash');
const finteriors = document.querySelectorAll('.filter.interior');
const fautodetails = document.querySelectorAll('.filter.autodetail');

pjlists.forEach((pjlist)=>{
   pjlist.addEventListener('click',()=>{
    let datafilter = pjlist.getAttribute('data-filter');
    // console.log(datafilter);
        removeactive();
        pjlist.classList.add('active');

        if(datafilter === "all"){
            fhandwashs.forEach(fhandwash=>{
                fhandwash.style.display = 'inline-block';
            });

            fhandwaxs.forEach((fhandwax)=>{
                fhandwax.style.display = 'inline-block';
            });

            fautowashs.forEach((fautowash)=>{
                fautowash.style.display = 'inline-block';
            });

            finteriors.forEach((finterior)=>{
                finterior.style.display = 'inline-block';
            });

            fautodetails.forEach((fautodetail)=>{
                fautodetail.style.display = 'inline-block';
            });
        }else if(datafilter === "handwash"){
            fhandwashs.forEach((fhandwash)=>{
                fhandwash.style.display = 'inline-block';
            });

            fhandwaxs.forEach((fhandwax)=>{
                fhandwax.style.display = 'none';
            });

            fautowashs.forEach((fautowash)=>{
                fautowash.style.display = 'none';
            });

            finteriors.forEach((finterior)=>{
                finterior.style.display = 'none';
            });

            fautodetails.forEach((fautodetail)=>{
                fautodetail.style.display = 'none';
            });
        }else if(datafilter === "handwax"){
            fhandwashs.forEach((fhandwash)=>{
                fhandwash.style.display = 'none';
            });

            fhandwaxs.forEach((fhandwax)=>{
                fhandwax.style.display = 'inline-block';
            });

            fautowashs.forEach((fautowash)=>{
                fautowash.style.display = 'none';
            });

            finteriors.forEach((finterior)=>{
                finterior.style.display = 'none';
            });

            fautodetails.forEach((fautodetail)=>{
                fautodetail.style.display = 'none';
            });
        }else if(datafilter === "autowash"){
            fhandwashs.forEach((fhandwash)=>{
                fhandwash.style.display = 'none';
            });

            fhandwaxs.forEach((fhandwax)=>{
                fhandwax.style.display = 'none';
            });

            fautowashs.forEach((fautowash)=>{
                fautowash.style.display = 'inline-block';
            });

            finteriors.forEach((finterior)=>{
                finterior.style.display = 'none';
            });

            fautodetails.forEach((fautodetail)=>{
                fautodetail.style.display = 'none';
            });
        }else if(datafilter === "interior"){
            fhandwashs.forEach((fhandwash)=>{
                fhandwash.style.display = 'none';
            });

            fhandwaxs.forEach((fhandwax)=>{
                fhandwax.style.display = 'none';
            });

            fautowashs.forEach((fautowash)=>{
                fautowash.style.display = 'none';
            });

            finteriors.forEach((finterior)=>{
                finterior.style.display = 'inline-block';
            });

            fautodetails.forEach((fautodetail)=>{
                fautodetail.style.display = 'none';
            });
        }else if(datafilter === "autodetail"){
            fhandwashs.forEach((fhandwash)=>{
                fhandwash.style.display = 'none';
            });

            fhandwaxs.forEach((fhandwax)=>{
                fhandwax.style.display = 'none';
            });

            fautowashs.forEach((fautowash)=>{
                fautowash.style.display = 'none';
            });

            finteriors.forEach((finterior)=>{
                finterior.style.display = 'none';
            });

            fautodetails.forEach((fautodetail)=>{
                fautodetail.style.display = 'inline-block';
            });
        }
   });

   function removeactive(){
        pjlists.forEach((pjlist)=>{
            pjlist.classList.remove('active');
        });
   }
});
//End Project Nav Section 

//Start PopUp Slider Section
const imageviews = document.querySelector('.image-view');
const imagebox = document.querySelector('.image-box');
const viewbtns = document.querySelectorAll('.content span');
const filters = document.querySelectorAll('.filter');

const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

viewbtns.forEach((viewbtn,idx)=>{
    viewbtn.addEventListener('click',()=>{
       imageviews.style.display = 'block';
       imagebox.style.display = 'block'; 

       currentImageIdx = idx + 1;
       console.log(currentImageIdx);
    currentImageDisplay(currentImageIdx);
    });
});

function currentImageDisplay(){
    imagebox.style.background = `url(./assets/gallery/gallery${currentImageIdx}.jpg) no-repeat center/cover`;
}

leftbtn.addEventListener('click',()=>{
    currentImageIdx --;
    if(currentImageIdx <= 0){
        currentImageIdx = filters.length;       
    }
    currentImageDisplay(currentImageIdx);
});

rightbtn.addEventListener('click',()=>{
    currentImageIdx ++;
    if(currentImageIdx === filters.length+1){
        currentImageIdx = 1;
    }

    currentImageDisplay(currentImageIdx);
});



window.onclick = (e)=>{
    if(e.target === imageviews){
        imageviews.style.display = 'none';
        imagebox.style.display = 'none';
    }
}
//End Popup Slider Section
//END PROJECT SECTION

// START FOOTER SECTION 
const fyear = document.getElementById('fyears');
const date = new Date().getUTCFullYear();
fyear.textContent = date;
// END FOOTER SECTION 
