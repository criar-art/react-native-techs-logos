import Svg, { type SvgProps, Path } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg preserveAspectRatio="xMinYMin meet" viewBox="-35.5 0 327 327" {...props}>
    <Path d="M69.298.005c-1.653.051-3.433.662-5.453 2.255C58.9.353 54.102-.31 49.813 3.573c-6.623-.859-8.775.914-10.406 2.984-1.454-.03-10.879-1.495-15.202 4.953C13.343 10.225 9.91 17.899 13.8 25.056c-2.219 3.434-4.518 6.827.67 13.375-1.835 3.646-.697 7.602 3.626 12.389-1.14 5.127 1.102 8.743 5.125 11.562-.753 7.015 6.433 11.094 8.578 12.547.824 4.087 2.541 7.945 10.748 10.077 1.354 6.092 6.286 7.144 11.063 8.422-15.787 9.177-29.325 21.25-29.233 50.875l-2.313 4.125c-18.102 11.008-34.388 46.39-8.92 75.148 1.663 9.002 4.453 15.468 6.937 22.624 3.715 28.836 27.962 42.339 34.358 43.936 9.371 7.138 19.352 13.911 32.86 18.656 12.731 13.131 26.525 18.136 40.394 18.128.204 0 28.277-4.996 41.01-18.128 13.506-4.745 23.487-11.518 32.86-18.656 6.394-1.597 30.641-15.1 34.356-43.936 2.484-7.156 5.274-13.622 6.938-22.624 25.466-28.761 9.181-64.144-8.92-75.152l-2.317-4.125c.092-29.622-13.446-41.696-29.233-50.875 4.776-1.278 9.71-2.33 11.062-8.422 8.207-2.133 9.925-5.99 10.748-10.077 2.146-1.453 9.331-5.532 8.58-12.547 4.021-2.819 6.264-6.436 5.123-11.562 4.324-4.787 5.461-8.743 3.626-12.39 5.19-6.544 2.887-9.937.671-13.371 3.888-7.157.457-14.832-10.409-13.546-4.32-6.448-13.744-4.984-15.202-4.954-1.63-2.069-3.782-3.842-10.405-2.983-4.289-3.883-9.085-3.221-14.032-1.313-5.874-4.635-9.76-.92-14.2.485-7.112-2.324-8.739.859-12.233 2.156-7.756-1.639-10.113 1.929-13.83 5.695l-4.326-.086c-11.698 6.894-17.51 20.932-19.57 28.149-2.06-7.218-7.859-21.256-19.555-28.149l-4.325.086c-3.723-3.766-6.079-7.334-13.835-5.695C86.78 3.603 85.16.42 78.042 2.744c-2.914-.922-5.594-2.838-8.749-2.74L-11 141" />
    <Path
      fill="#75A928"
      d="M46.008 30.334c31.036 16.001 49.079 28.945 58.964 39.969-5.062 20.289-31.47 21.215-41.126 20.646 1.977-.92 3.627-2.023 4.212-3.716-2.423-1.722-11.014-.182-17.012-3.551 2.304-.478 3.382-.943 4.459-2.643-5.666-1.807-11.77-3.365-15.36-6.359 1.937.024 3.746.434 6.276-1.321-5.075-2.735-10.491-4.903-14.699-9.084 2.624-.064 5.453-.026 6.276-.991-4.645-2.878-8.565-6.078-11.809-9.579 3.672.443 5.223.062 6.111-.578-3.512-3.597-7.956-6.634-10.075-11.066 2.726.94 5.221 1.3 7.019-.082-1.193-2.692-6.305-4.28-9.249-10.571 2.871.279 5.915.626 6.524 0-1.332-5.428-3.618-8.48-5.86-11.642 6.143-.091 15.451.024 15.03-.495L31.89 15.39c6.001-1.616 12.141.259 16.599 1.651 2.001-1.579-.036-3.576-2.478-5.615 5.1.681 9.708 1.853 13.874 3.468 2.225-2.009-1.445-4.019-3.221-6.028 7.879 1.494 11.217 3.595 14.534 5.698 2.407-2.307.138-4.268-1.486-6.276 5.941 2.2 9.001 5.041 12.222 7.845 1.092-1.474 2.775-2.555.743-6.111 4.218 2.431 7.395 5.296 9.745 8.506 2.61-1.662 1.555-3.934 1.569-6.029 4.384 3.566 7.166 7.361 10.571 11.066.686-.5 1.286-2.193 1.817-4.872 10.457 10.145 25.234 35.7 3.798 45.832-18.243-15.046-40.031-25.983-64.176-34.187l.007-.004m164.678 0c-31.032 16.003-49.075 28.943-58.959 39.969 5.062 20.289 31.469 21.215 41.125 20.646-1.977-.92-3.627-2.023-4.211-3.716 2.423-1.722 11.014-.182 17.011-3.551-2.304-.478-3.381-.943-4.459-2.643 5.667-1.807 11.771-3.365 15.36-6.359-1.937.024-3.746.434-6.276-1.321 5.076-2.735 10.492-4.903 14.7-9.084-2.625-.064-5.454-.026-6.276-.991 4.645-2.878 8.565-6.078 11.809-9.579-3.673.443-5.223.062-6.111-.578 3.511-3.597 7.956-6.634 10.075-11.066-2.727.94-5.222 1.3-7.02-.082 1.193-2.692 6.306-4.28 9.249-10.571-2.87.279-5.915.626-6.524 0 1.335-5.43 3.621-8.482 5.863-11.644-6.143-.091-15.451.024-15.03-.495l3.799-3.882c-6.001-1.615-12.141.26-16.599 1.652-2.001-1.579.035-3.576 2.477-5.615-5.099.68-9.708 1.853-13.873 3.468-2.226-2.009 1.445-4.019 3.221-6.028-7.879 1.494-11.217 3.595-14.535 5.698-2.407-2.307-.137-4.268 1.487-6.276-5.941 2.2-9.001 5.041-12.222 7.845-1.093-1.474-2.775-2.555-.744-6.111-4.217 2.431-7.394 5.296-9.744 8.506-2.61-1.662-1.555-3.935-1.569-6.029-4.384 3.566-7.166 7.36-10.571 11.066-.686-.5-1.286-2.193-1.817-4.873-10.457 10.146-25.234 35.701-3.798 45.833 18.233-15.05 40.02-25.985 64.166-34.189h-.004"
    />
    <Path
      fill="#BC1142"
      d="M165.933 236.933c.108 18.933-16.449 34.362-36.98 34.461-20.532.1-37.264-15.167-37.372-34.1a21.72 21.72 0 0 1 0-.361c-.108-18.932 16.448-34.361 36.98-34.461 20.532-.1 37.263 15.167 37.372 34.1v.361m-58.687-97.929c15.404 10.093 18.181 32.969 6.202 51.095-11.979 18.127-34.177 24.641-49.581 14.549-15.404-10.093-18.18-32.969-6.202-51.095 11.979-18.127 34.177-24.641 49.581-14.549m41.576-1.827c-15.403 10.092-18.18 32.969-6.202 51.095 11.979 18.127 34.177 24.641 49.581 14.548 15.404-10.092 18.181-32.968 6.202-51.095-11.978-18.126-34.176-24.64-49.581-14.548M30.258 155.504c16.631-4.458 5.615 68.803-7.917 62.792-14.885-11.972-19.679-47.033 7.917-62.792m192.195-.913c-16.633-4.457-5.615 68.807 7.917 62.796 14.885-11.973 19.679-47.038-7.917-62.796m-56.507-54.557c28.701-4.846 52.583 12.206 51.619 43.328-.944 11.932-62.193-41.551-51.619-43.328m-79.3-.913c-28.703-4.847-52.583 12.209-51.619 43.329.944 11.931 62.194-41.552 51.619-43.329m41.228-7.258c-17.13-.446-33.57 12.713-33.61 20.346-.047 9.274 13.544 18.77 33.727 19.011 20.61.147 33.762-7.601 33.828-17.172.076-10.844-18.745-22.353-33.945-22.186v.001m1.046 190.18c14.935-.652 34.975 4.81 35.015 12.057.248 7.036-18.175 22.934-36.005 22.627-18.466.797-36.573-15.126-36.336-20.645-.277-8.092 22.484-14.41 37.326-14.039m-55.164-42.945c10.633 12.81 15.481 35.316 6.607 41.951-8.395 5.065-28.782 2.979-43.272-17.838-9.773-17.468-8.514-35.243-1.652-40.465 10.261-6.25 26.115 2.193 38.318 16.352h-.001m108.2-4.061c-11.505 13.475-17.911 38.053-9.519 45.969 8.025 6.15 29.567 5.29 45.479-16.789 11.554-14.829 7.683-39.594 1.083-46.17-9.804-7.583-23.879 2.122-37.043 16.986v.004"
    />
  </Svg>
);
export default SvgComponent;
