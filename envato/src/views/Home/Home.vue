<template>
  <div :class="styles.home">
    <div :class="styles.home_nav">
      <img
        src="@/assets/images/logo.png"
        alt="Logo"
        :class="styles.home_nav_logo"
      />
      <ul :class="styles.home_nav_navlist">
        <li :class="styles.home_nav_navlist_item">Home</li>
        <li :class="styles.home_nav_navlist_item">About</li>
        <li :class="styles.home_nav_navlist_item">Portfolio</li>
        <li :class="styles.home_nav_navlist_item">Testimonial</li>
        <li :class="styles.home_nav_navlist_item">Contact</li>
      </ul>
    </div>
    <div :class="styles.home_homepage">
      <div :class="styles.home_homepage_context">
        <h1 :class="styles.home_homepage_context_name">Andriano Smith</h1>
        <h1 :class="styles.home_homepage_context_job">Web designer</h1>
        <p :class="styles.home_homepage_context_subtext">
          Wide range option of furbitures crafted using the brst selected wood.
        </p>
        <div :class="styles.home_homepage_context_btns">
          <button :class="styles.home_homepage_context_btns_btn">
            Hire me
          </button>
          <button :class="styles.home_homepage_context_btns_btn">
            View Profile
          </button>
        </div>
      </div>
      <div :class="styles.home_homepage_image">
        <img src="@/assets/images/face.png" alt="Face of the Man" />
        <img
          src="@/assets/images/line1.png"
          alt="Face of the Man"
          :class="styles.home_homepage_image_lines"
        />
        <img
          src="@/assets/images/line2.png"
          alt="Face of the Man"
          :class="styles.home_homepage_image_lines"
        />
      </div>
    </div>
    <div :class="styles.home_about">
      <h1 :class="styles.home_about_title">About</h1>
      <div :class="styles.home_about_details">
        <div :class="styles.home_about_details_image">
          <img src="@/assets/images/man.png" alt="Image of the Man" />
        </div>
        <div :class="styles.home_about_details_context">
          <p :class="styles.home_about_details_context_title">Hello!</p>
          <p :class="styles.home_about_details_context_job">
            Web designer, Graphic designer, Motion designer.
          </p>
          <p :class="styles.home_about_details_context_subtext">
            Wide range option of furbitures crafted using the brst selected wood
            in the city so that it makes your home look more elegant and modern
          </p>
          <div :class="styles.home_about_details_context_pinfo">
            <ul :class="styles.home_about_details_context_pinfo_list">
              <li :class="styles.home_about_details_context_pinfo_text">
                Name:
              </li>
              <li :class="styles.home_about_details_context_pinfo_subtext">
                Andriano Smith
              </li>
              <li :class="styles.home_about_details_context_pinfo_text">
                Age:
              </li>
              <li :class="styles.home_about_details_context_pinfo_subtext">
                31
              </li>
            </ul>
            <ul :class="styles.home_about_details_context_pinfo_list">
              <li :class="styles.home_about_details_context_pinfo_text">
                Email:
              </li>
              <li :class="styles.home_about_details_context_pinfo_subtext">
                mail@gmail.com
              </li>
              <li :class="styles.home_about_details_context_pinfo_text">
                Address:
              </li>
              <li :class="styles.home_about_details_context_pinfo_subtext">
                Ave 11,New York,USA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div :class="styles.home_about_skills">
        <div :class="styles.home_about_skills_design">
          <p :class="styles.home_about_skills_design_title">Design Skills</p>
          <ul :class="styles.home_about_skills_design_list">
            <li :class="styles.home_about_skills_design_list_item">
                <p :class="styles.home_about_skills_design_list_item_text">Web design <span>85%</span></p>
                <div :class="styles.home_about_skills_design_list_item_line">
                    <div :class="styles.home_about_skills_design_list_item_line_red"></div>
                </div>
            </li>
            <li :class="styles.home_about_skills_design_list_item">
                <p :class="styles.home_about_skills_design_list_item_text">Graphic design <span>85%</span></p>
                <div :class="styles.home_about_skills_design_list_item_line">
                    <div :class="styles.home_about_skills_design_list_item_line_red"></div>
                </div>
            </li>
            <li :class="styles.home_about_skills_design_list_item">
                <p :class="styles.home_about_skills_design_list_item_text">Motion design <span>85%</span></p>
                <div :class="styles.home_about_skills_design_list_item_line">
                    <div :class="styles.home_about_skills_design_list_item_line_red"></div>
                </div>
            </li>
          </ul>
        </div>  
        <div :class="styles.home_about_skills_language">
          <p :class="styles.home_about_skills_design_title">Language Skills</p>
          <ul :class="styles.home_about_skills_design_list">
            <li :class="styles.home_about_skills_design_list_item">
                <p :class="styles.home_about_skills_design_list_item_text">English <span>85%</span></p>
                <div :class="styles.home_about_skills_design_list_item_line">
                    <div :class="styles.home_about_skills_design_list_item_line_red"></div>
                </div>
            </li>
            <li :class="styles.home_about_skills_design_list_item">
                <p :class="styles.home_about_skills_design_list_item_text">Russian<span>85%</span></p>
                <div :class="styles.home_about_skills_design_list_item_line">
                    <div :class="styles.home_about_skills_design_list_item_line_red"></div>
                </div>
            </li>
            <li :class="styles.home_about_skills_design_list_item">
                <p :class="styles.home_about_skills_design_list_item_text">Uzbek<span>85%</span></p>
                <div :class="styles.home_about_skills_design_list_item_line">
                    <div :class="styles.home_about_skills_design_list_item_line_red"></div>
                </div>
            </li>
          </ul>
        </div>  
        
      </div>
    </div>
    <div :class="styles.home_portfolio">
        <p :class="styles.home_portfolio_title">
            Portfolio
        </p>
        <ul :class="styles.home_portfolio_list">
            <li :class="styles.home_portfolio_list_item">Web design</li>
            <li :class="styles.home_portfolio_list_item">Graphic design</li>
            <li :class="styles.home_portfolio_list_item">Motion design</li>
        </ul>
        <ul :class="styles.home_portfolio_images">
            <li :class="styles.home_portfolio_images_item">
                <img src="@/assets/images/design1.png" alt="Photo of the design">
            </li>
            <li :class="styles.home_portfolio_images_item">
                <img src="@/assets/images/design2.png" alt="Photo of the design">
            </li>
            <li :class="styles.home_portfolio_images_item">
                <img src="@/assets/images/design3.png" alt="Photo of the design">
            </li>
            <li :class="styles.home_portfolio_images_item">
                <img src="@/assets/images/design4.png" alt="Photo of the design">
            </li>
            <li :class="styles.home_portfolio_images_item">
                <img src="@/assets/images/design5.png" alt="Photo of the design">
            </li>
            <li :class="styles.home_portfolio_images_item">
                <img src="@/assets/images/design6.png" alt="Photo of the design">
            </li>
            <li :class="styles.home_portfolio_images_item">
                <img src="@/assets/images/design7.png" alt="Photo of the design">
            </li>
            <li :class="styles.home_portfolio_images_item">
                <img src="@/assets/images/design8.png" alt="Photo of the design">
            </li>
        </ul>
    </div>
    <div :class="styles.home_testimonial">
        <h1 :class="styles.home_testimonial_title">Testimonial</h1>
        <p :class="styles.home_testimonial_text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <div :class="styles.home_testimonial_list">
          <p :class="styles.home_testimonial_list_text">Ronald Richards <span>5/19/12</span></p>
          <div :class="styles.home_testimonial_list_images">
            <img src="@/assets/images/left.png" alt="Arrow of left">
            <img src="@/assets/images/right.png" alt="Arrow of right">
          </div>
        </div>
    </div>
    <div :class="styles.home_contact">
      <form :class="styles.home_contact_context">
        <p :class="styles.home_contact_context_title">
          Get in touch
        </p>
        <input type="text" placeholder="Name" :class="styles.home_contact_context_name">
        <input type="email" placeholder="Email" :class="styles.home_contact_context_email">
        <input type="text" placeholder="Message" :class="styles.home_contact_context_message">
        <button type="button" :class="styles.home_contact_context_btn">
          Send message
        </button>
      </form>
      <img src="@/assets/images/map.png" alt="Image of Map">
    </div>
  </div>
</template>

<script>
import styles from "./Home.module.scss";
export default {
  name: "Home",
  data() {
    return {
      styles,
    };
  },
};
</script>

<style></style>
