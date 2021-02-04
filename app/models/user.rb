require 'bcrypt'

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  # validate :validate_watch_history
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  before_update :format_watch_history

  attr_reader :password

  def format_watch_history
    seen = []
    self.watch_history.each{ |movieId| 
      movieId = movieId.to_i if movieId.is_a? String
      seen.unshift(movieId) unless seen.include?(movieId)
    }
    self.watch_history = seen
  end

  def validate_watch_history
    if (watch_history != [] && !!watch_history.detect{|i| i.is_a? Integer})
      errors.add(:watch_history, :invalid)
    end 
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      false
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.session_token = User.generate_session_token
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
  end
end
