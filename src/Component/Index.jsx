import React, { useRef } from "react";
import "../Styles/Index.css";
import TrueFocus from "./TrueFocus";
import SpotlightCard from "./SpotlightCard";

export default function Index() {
  const navLinks = [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <>
      <SpotlightCard className="nav no-caret">
        <h1>Lynxx</h1>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </SpotlightCard>
      <div className="main-container no-caret">
        <div className="section-container">
          <SpotlightCard className="bio-container">
            <svg
              width="100"
              height="100"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="Scribble-1.svg"
              onclick="copyToClipboard(this)"
            >
              <path
                d="M20.891 16.8915C33.4615 11.3216 48.3988 11.8896 63.7568 13.4359C79.1149 14.9665 94.8937 17.4595 109.252 15.382C109.989 15.2768 110.462 14.593 110.357 13.8619C110.252 13.1308 109.568 12.626 108.832 12.7364C95.1041 14.8087 79.483 12.4629 64.0198 10.9849C48.5566 9.52278 33.1986 8.91795 19.9444 14.8297C19.4185 15.0612 19.3658 15.7659 19.5761 16.2393C19.7865 16.7179 20.3651 17.1176 20.891 16.8915Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M16.2099 38.377C30.5686 32.7334 48.3457 31.9339 66.6492 32.0075C84.9526 32.0759 103.677 33.0121 119.982 30.6295C120.928 30.4875 121.612 29.5881 121.454 28.6309C121.297 27.6736 120.403 27.0109 119.456 27.1582C103.677 29.667 85.0052 28.978 66.6492 29.1095C48.2932 29.2567 30.2003 30.2193 15.3156 36.2363C14.7897 36.4572 14.6317 37.1672 14.8421 37.6774C15.0525 38.1823 15.6313 38.5979 16.2099 38.377Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M20.4153 56.8801C40.5596 52.683 60.0202 52.2569 79.6911 51.0209C99.362 49.7797 119.191 47.7232 139.808 40.0705C141.176 39.5603 141.859 38.0245 141.333 36.6517C140.807 35.279 139.282 34.5794 137.915 35.1054C118.138 42.6739 98.8884 44.9145 79.3752 46.3399C59.8621 47.7757 40.1385 48.3912 19.5734 52.8986C18.5215 53.1301 17.8905 54.2451 18.1009 55.297C18.3112 56.3489 19.3634 57.1063 20.4153 56.8801Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M18.892 77.8822C71.0673 64.0021 113.144 61.9666 166.582 69.9875C167.949 70.1926 169.212 69.2406 169.422 67.8731C169.632 66.5056 168.686 65.2275 167.318 65.0329C113.302 57.3486 70.331 59.7785 17.9454 74.2162C16.946 74.4844 16.4728 75.5679 16.7358 76.5094C16.9461 77.4509 17.9453 78.1451 18.892 77.8822Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M22.8364 101.329C32.1459 92.5929 43.8224 87.7015 56.9715 85.1769C70.0679 82.6523 84.5843 82.526 99.4689 83.3202C114.301 84.1092 129.449 85.8185 143.86 86.9231C158.272 88.0171 171.946 88.5167 183.886 86.7863C185.463 86.5601 186.515 85.0717 186.305 83.4938C186.042 81.9159 184.569 80.8219 182.991 81.0744C171.841 82.8679 158.534 82.6207 144.228 81.7371C129.922 80.8587 114.722 79.3703 99.6795 78.7865C84.6371 78.2079 69.7523 78.5393 56.1825 81.3532C42.6127 84.167 30.3052 89.5056 20.5749 98.9255C19.26 100.198 21.5215 102.581 22.8364 101.329Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M18.9441 122.42C22.2051 117.802 29.3052 114.326 39.0354 111.791C43.9794 110.497 49.6073 109.361 55.7085 108.461C61.8622 107.567 68.4366 106.894 75.3267 106.405C89.0542 105.421 103.886 105.179 118.298 105.348C147.068 105.684 174.05 107.688 186.778 108.803C188.408 108.945 189.828 107.73 189.986 106.1C190.144 104.464 188.934 103.028 187.304 102.891C174.47 101.818 147.331 99.8776 118.351 99.7409C103.834 99.6778 88.844 100.067 74.906 101.245C67.9107 101.839 61.2314 102.623 54.9724 103.654C48.7135 104.68 42.9278 105.931 37.7734 107.567C32.7768 109.156 28.4112 111.044 24.7821 113.253C21.2056 115.467 18.4178 118.013 16.6821 120.948C15.8932 122.231 18.05 123.641 18.9441 122.42Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M12.2645 141.087C28.0959 128.726 48.4502 124.861 69.8042 123.788C91.1582 122.709 113.406 124.44 132.919 123.004C134.129 122.915 135.076 121.831 134.971 120.6C134.866 119.37 133.814 118.444 132.552 118.549C113.565 120.195 91.2637 118.739 69.5941 120.08C47.9772 121.431 26.8862 125.597 10.4236 138.751C9.1613 139.777 11.0022 142.096 12.2645 141.087Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M14.4733 156.681C30.3573 149.533 46.9249 146.572 64.0712 144.247C71.6976 143.227 79.3766 141.607 87.1082 139.835C87.4238 139.75 87.6867 139.435 87.6341 139.088C87.5815 138.741 87.2658 138.499 86.8976 138.509C79.0082 138.777 71.1714 138.919 63.4924 139.977C46.2409 142.322 29.2002 145.652 12.8954 153.341C12.0538 153.73 11.9483 154.888 12.3165 155.64C12.6847 156.397 13.6317 157.06 14.4733 156.681Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M19.2595 172.197C29.4632 166.086 40.9818 162.814 52.7633 159.764C58.8645 158.186 64.9653 156.14 70.856 153.81C71.2768 153.652 71.4348 153.184 71.3296 152.8C71.2244 152.416 70.8037 152.116 70.383 152.2C64.2292 153.421 57.9704 154.33 51.8167 155.871C39.93 158.843 27.9905 162.183 17.1557 168.658C16.209 169.241 15.8935 170.509 16.472 171.487C17.0506 172.466 18.3128 172.781 19.2595 172.197Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M17.1028 189.591C27.622 185.131 38.1412 180.671 48.6604 176.21C48.976 176.079 49.081 175.669 48.9758 175.374C48.8706 175.08 48.5024 174.838 48.1869 174.948C37.4047 178.677 26.5701 182.412 15.7879 186.146C14.7886 186.477 14.3675 187.576 14.6831 188.528C15.0513 189.48 16.1561 189.985 17.1028 189.591Z"
                fill="rgb(206, 203, 203)"
              />
            </svg>
            <h1>Never miss twice.</h1>
          </SpotlightCard>

          <div className="img-container">
            <img src="/me.jpg" alt="Me" />
          </div>

          <SpotlightCard className="setup-container">
            <h3>My Projects</h3>
            <img src="/setup.jpg" alt="Set-up" />
            <h3>Growing as of now.</h3>
          </SpotlightCard>

          <SpotlightCard className="info-container">
            <svg
              width="50"
              height="50"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="Scribble-33.svg"
            >
              <path
                d="M160.823 12.3982C160.757 12.3473 160.692 12.3025 160.631 12.2486C159.142 10.9176 157.728 10.1907 156.338 10.0322C154.95 9.8737 153.623 10.3074 152.393 11.1718C149.931 12.9096 147.727 16.3374 145.437 20.6744C140.891 29.3544 136.013 41.6895 130.05 51.4045C128.615 53.7494 127.113 55.9448 125.509 57.883C123.907 59.8242 122.211 61.5142 120.417 62.8752C116.814 65.594 112.91 67.0297 108.217 66.7246C107.214 66.6558 106.226 66.3358 105.184 65.7375C104.146 65.1393 103.07 64.257 101.985 63.1204C99.8088 60.8532 97.6188 57.581 95.441 53.8123C91.0681 46.2688 86.7346 36.7752 81.7079 29.0404C79.1858 25.1699 76.4885 21.7242 73.4047 19.1609C71.8619 17.8837 70.2163 16.8279 68.4435 16.0891C66.6731 15.3473 64.7723 14.9346 62.7898 14.9406C60.8073 14.9436 58.7564 15.3683 56.677 16.2268C54.5955 17.0882 52.4802 18.3773 50.3051 20.124C45.9565 23.6206 41.3463 28.9477 36.2711 36.5689C28.4863 48.2609 24.3778 61.3647 23.2957 74.7766C22.2132 88.1944 24.143 101.926 28.4292 114.991C33.0641 129.106 40.4233 142.467 49.8281 153.821C59.234 165.169 70.6939 174.522 83.5719 180.498C95.5813 186.068 106.259 189.065 115.812 189.812C125.355 190.566 133.79 189.029 141.003 185.574C148.221 182.125 154.154 176.81 158.893 170.305C163.643 163.796 167.228 156.097 169.93 147.695C176.027 128.711 177.713 106.06 176.996 84.6739C176.634 73.9839 175.662 63.6199 174.331 54.2131C173.999 51.8621 173.644 49.5709 173.271 47.3486C172.895 45.1292 172.47 42.9816 172.013 40.9178C171.096 36.7932 170.05 33.0065 168.978 29.6266C167.49 24.9456 165.958 21.0483 164.56 18.123C163.154 15.1948 161.906 13.2417 160.806 12.4072C160.465 12.1499 160.003 12.6644 160.287 12.9844C160.991 13.78 161.79 15.8289 162.516 18.8528C163.251 21.8798 163.935 25.8848 164.587 30.6226C165.06 34.0444 165.519 37.8491 166.008 41.9468C166.253 43.9927 166.506 46.1163 166.775 48.2998C167.047 50.4862 167.306 52.7384 167.546 55.0475C168.506 64.2869 169.184 74.4446 169.35 84.8654C169.688 105.698 167.938 127.613 162.252 145.222C159.741 153.013 156.478 159.944 152.412 165.612C148.335 171.283 143.483 175.686 137.615 178.614C131.741 181.53 124.786 183.017 116.304 182.55C107.831 182.077 97.8473 179.613 86.2238 174.585C74.2231 169.401 63.1589 160.922 53.9527 150.321C44.7454 139.73 37.4044 127.024 32.8078 113.526C28.5512 101.035 26.6217 87.8833 27.5971 75.1145C28.5731 62.3427 32.4402 49.9598 39.7829 38.9018C44.6927 31.505 49.0878 26.492 52.9379 23.3993C54.862 21.8529 56.6444 20.7851 58.2805 20.1091C59.9187 19.4332 61.4052 19.143 62.8018 19.137C64.1986 19.134 65.5182 19.4122 66.8319 19.9596C68.1432 20.5039 69.4446 21.3205 70.7337 22.3883C73.3141 24.5149 75.82 27.6496 78.2137 31.3196C83.0183 38.6656 87.3667 48.0933 91.9092 55.8671C94.1892 59.7614 96.5157 63.249 99.0877 65.9111C100.376 67.2391 101.732 68.3667 103.205 69.2012C104.675 70.0357 106.278 70.5771 107.967 70.6788C113.671 71.0317 118.639 69.1205 122.75 65.9111C124.815 64.3078 126.687 62.3876 128.41 60.249C130.131 58.1074 131.712 55.7534 133.162 53.2589C139.166 42.9009 142.87 30.1441 146.815 21.3444C148.771 16.9446 150.789 13.5378 152.939 11.9256C154.014 11.115 155.092 10.7441 156.254 10.8488C157.416 10.9565 158.704 11.5607 160.115 12.8259C160.169 12.8797 160.22 12.9366 160.27 12.9964C160.416 13.1669 160.692 13.1399 160.844 12.9724C160.997 12.8079 161.004 12.5298 160.823 12.3982Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M29.8577 56.5787C33.505 60.5359 37.3488 65.5579 41.3 70.5111C45.2536 75.4702 49.3109 80.3605 53.4449 84.0844C72.3363 101.095 95.3982 109.236 117.332 107.163C139.261 105.102 160.022 92.7166 173.933 69.0544C174.462 68.1571 174.149 66.9966 173.246 66.4731C172.342 65.9497 171.18 66.2517 170.662 67.158C157.569 90.0575 138.055 102.028 117.044 104.316C96.0392 106.592 73.4996 99.0786 54.7367 82.6308C50.711 79.1043 46.6271 74.3276 42.6256 69.4402C38.6215 64.5558 34.6964 59.5608 30.9282 55.5797C30.3722 54.9934 29.3095 55.9865 29.8577 56.5787Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M28.1314 108.501C41.2741 121.075 60.5529 132.085 81.4556 138.42C91.9069 141.585 102.765 143.577 113.459 143.989C124.151 144.402 134.685 143.236 144.435 140.056C149.956 138.238 155.153 135.596 159.839 132.22C164.529 128.84 168.702 124.724 172.281 119.956C172.771 119.304 171.753 118.413 171.17 118.984C167.007 123.058 162.491 126.312 157.755 128.959C153.015 131.603 148.051 133.646 142.888 135.303C133.792 138.259 123.851 139.467 113.608 139.225C103.366 138.985 92.8284 137.298 82.5883 134.493C62.1088 128.888 42.8261 118.79 29.559 106.954C28.6922 106.182 27.2921 107.696 28.1314 108.501Z"
                fill="rgb(206, 203, 203)"
              />
              <path
                d="M79.883 176.867C89.6195 178.764 98.9611 179.167 107.917 178.207C116.872 177.25 125.434 174.926 133.57 171.417C139.574 168.827 145.278 165.462 150.682 161.517C156.089 157.569 161.199 153.04 166.096 148.096C166.559 147.627 165.82 146.801 165.303 147.208C159.873 151.482 154.347 155.284 148.766 158.628C143.182 161.975 137.545 164.864 131.811 167.338C124.035 170.694 115.957 173.054 107.432 174.22C98.9085 175.39 89.9308 175.366 80.3987 173.906C79.5932 173.783 78.8511 174.352 78.7138 175.138C78.5765 175.928 79.0829 176.712 79.883 176.867Z"
                fill="rgb(206, 203, 203)"
              />
            </svg>
            <TrueFocus
              sentence="Web-Dev Bug-Hunting"
              manualMode={false}
              blurAmount={2}
              borderColor="rgb(206, 203, 203)"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </SpotlightCard>

          <SpotlightCard className="contact-container">
            <a
              href="https://www.protectedtext.com/anup.archive"
              target="_blank"
            >
              <h3>Get to know me</h3>
            </a>
            <h1>Contact me</h1>
          </SpotlightCard>
          <SpotlightCard className="link-container">
            <ul>
              <li>
                <a href="https://github.com/lynx-fx" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anup-bhujel-2b1381303/"
                  target="_blank"
                >
                  Linkdlen
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/anup.archive/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </SpotlightCard>
        </div>
      </div>
    </>
  );
}
