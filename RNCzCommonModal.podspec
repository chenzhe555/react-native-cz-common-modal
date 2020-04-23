
Pod::Spec.new do |s|
  s.name         = "RNCzCommonModal"
  s.version      = "1.0.0"
  s.summary      = "RNCzCommonModal"
  s.homepage     = "https://github.com/chenzhe555/react-native-cz-common-modal"
  s.license      = { :type => "MIT", :file => "LICENSE" }
  s.author       = { "author" => "376811578@qq.com" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/chenzhe555/react-native-cz-common-modal.git", :tag => s.version }
  s.source_files = "*.{h,m}"
  s.requires_arc = true
  s.dependency "React"
  #s.dependency "others"

end

  
