function ModalCase({ setIsOpen, flim }) {
  return (
    <div className="modal-show" onClick={() => setIsOpen(false)}>
      <div
        id="modal1"
        className="modal"
        style={{ display: "block", to: "35%" }}
      >
        <div className="modal-content">
          <h4>Video</h4>
          <p>
            <iframe
              width="100%"
              height="400px"
              src={flim.clip}
              title={flim.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </p>
        </div>
        <div className="modal-footer">
          <a className="modal-close"> Close</a>
        </div>
      </div>
    </div>
  );
}

export default ModalCase;
